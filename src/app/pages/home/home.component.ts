import { Component, OnInit } from '@angular/core';
import { IFavoritosFilmes } from 'src/app/models/filme-favoritos';
import { FilmeLista } from 'src/app/models/filme-lista';
import { TipoLista } from 'src/app/models/tipo-lista';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // filmes: FilmeLista[] = [];
  favoritos: IFavoritosFilmes = { favoritosIds: [] };
  filmes: FilmeLista[] = [];
  filmesLancamentos: FilmeLista[] = [];

  constructor(private filmeService: FilmeService) {}

  ngOnInit(): void {
    this.filmeService.obterListaFilmes('Lancamentos').subscribe((filmes) => {
      this.filmesLancamentos = filmes;
    });
    this.filmeService.obterListaFilmes('EmAlta').subscribe((filmes) => {
      this.filmes = filmes;
    });
  }
}
