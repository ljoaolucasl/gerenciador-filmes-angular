import { environment } from 'src/environments/environment';
import { FilmeCreditos } from '../models/filme-creditos';
import { FilmeDetalhes } from '../models/filme-detalhes';
import { IFavoritosFilmes } from '../models/filme-favoritos';
import { HttpClient } from '@angular/common/http';
import { FilmeLista } from '../models/filme-lista';
import { TipoLista } from '../models/tipo-lista';
import { RepositorioFilmesFavoritos } from './local-storage.service';
import { Observable, forkJoin, map } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  private urlPrincipal: string = 'https://api.themoviedb.org/3';
  private API_KEY = environment.API_KEY;

  private urlVideo: string = 'https://www.youtube.com/embed/';

  // private repositorioFavoritos: RepositorioFilmesFavoritos;
  // private favoritos: IFavoritosFilmes;

  constructor(private http: HttpClient) {
    // this.repositorioFavoritos = new RepositorioFilmesFavoritos();
    // this.favoritos = this.repositorioFavoritos.carregarFavoritos();
  }

  public obterListaFilmes(tipo: TipoLista): Observable<FilmeLista[]> {
    let url = '';

    switch (tipo) {
      case 'BemAvaliado':
        url = `${this.urlPrincipal}/movie/top_rated?language=pt-BR&page=1&api_key=${this.API_KEY}`;
        break;
      case 'EmAlta':
        url = `${this.urlPrincipal}/movie/popular?language=pt-BR&page=1&api_key=${this.API_KEY}`;
        break;
      case 'Lancamentos':
        url = `${this.urlPrincipal}/movie/now_playing?language=pt-BR&page=1&api_key=${this.API_KEY}`;
        break;
      case 'EmBreve':
        url = `${this.urlPrincipal}/movie/upcoming?language=pt-BR&page=1&api_key=${this.API_KEY}`;
        break;
    }

    console.log(url);

    return this.http.get<any[]>(url).pipe(
      map((archive: any) => {
        return archive.results.map((obj: any) => {
          return this.mapearFilmeListagem(obj);
        });
      })
    );
  }

  public obterFilmesFavoritos(ids: number[]): Observable<FilmeLista[]> {
    const filmesFavoritos = ids.map((id) => {
      const url = `${this.urlPrincipal}/movie/${id}?language=pt-BR&api_key=${this.API_KEY}`;
      return this.http
        .get<any>(url)
        .pipe(map((obj) => this.mapearFilmeListagem(obj)));
    });

    return forkJoin(filmesFavoritos);
  }

  public obterDetalhesFilmePorId(id: number): Observable<FilmeDetalhes> {
    const url = `${this.urlPrincipal}/movie/${id}?language=pt-BR&api_key=${this.API_KEY}`;

    return this.http
      .get<any>(url)
      .pipe(
        map((archive: any) => {
          return this.mapearFilmeDetalhes(archive);
        })
      )
      .pipe(
        map((archive: any) => {
          archive.video = this.obterUrlVideo(archive.id);
          return archive;
        })
      );
  }

  public obterUrlVideo(id: number): Observable<string> {
    const url = `${this.urlPrincipal}/movie/${id}/videos?language=pt-BR&api_key=${this.API_KEY}`;

    return this.http.get<any>(url).pipe(
      map((archive: any) => {
        return this.mapearUrlVideo(archive.results);
      })
    );
  }

  public obterCreditos(id: string): Observable<FilmeCreditos> {
    const url = `${this.urlPrincipal}/movie/${id}/credits?language=pt-BR&api_key=${this.API_KEY}`;

    return this.http.get<any>(url).pipe(
      map((archive: any) => {
        return this.mapearCreditos(archive);
      })
    );
  }

  private mapearFilmeListagem(obj: any): FilmeLista {
    return {
      id: obj.id,
      titulo: obj.title,
      descricao: obj.overview,
      cartaz: obj.poster_path,
      banner: obj.backdrop_path,
    };
  }

  private mapearCreditos(obj: any): FilmeCreditos {
    const creditos = new FilmeCreditos();

    const elencoPrincipal = obj.cast.filter((item: any) => item.order < 11);

    const diretor = obj.crew.filter(
      (item: any) =>
        item.job === 'Director' ||
        item.job === 'Writer' ||
        item.job === 'Producer'
    );

    elencoPrincipal.map((item: any) => this.organizarCreditos(item, creditos));

    diretor.map((item: any) => this.organizarCreditos(item, creditos));

    return creditos;
  }

  private organizarCreditos(obj: any, creditos: FilmeCreditos) {
    if (obj.job) {
      creditos.adicionarEquipe(obj);
    } else {
      creditos.adicionarElenco(obj);
    }
  }

  private mapearUrlVideo(obj: any[]): string {
    const trailerDub = obj.find(
      (video) =>
        video.type === 'Trailer' &&
        (video.name.includes('Dub') || video.name.includes('DUB'))
    );
    const trailerLeg = obj.find(
      (video) =>
        video.type === 'Trailer' &&
        (video.name.includes('Leg') || video.name.includes('LEG'))
    );
    const primeiroTrailer = obj.find((video) => video.type === 'Trailer');
    const primeiroTeaser = obj.find((video) => video.type === 'Teaser');

    const videoKey =
      trailerDub?.key ||
      trailerLeg?.key ||
      primeiroTrailer?.key ||
      primeiroTeaser?.key;

    return videoKey ? `https://www.youtube.com/embed/${videoKey}` : '';
  }

  private mapearFilmeDetalhes(obj: any): FilmeDetalhes {
    return {
      id: obj.id,
      titulo: obj.title,
      cartaz: obj.poster_path,
      descricao: obj.overview,
      favoritado: obj.vote_count,
      generos: obj.genres.map((genero: any) => genero.name),
      banner: obj.backdrop_path,
      video: this.urlVideo,
    };
  }
}
