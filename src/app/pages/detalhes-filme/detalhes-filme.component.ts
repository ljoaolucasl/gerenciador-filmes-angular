import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeCreditos } from 'src/app/models/filme-creditos';
import { FilmeDetalhes } from 'src/app/models/filme-detalhes';
import { IFavoritosFilmes } from 'src/app/models/filme-favoritos';
import { FilmeService } from 'src/app/services/filme.service';
import { RepositorioFilmesFavoritos } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.component.html',
  styleUrls: ['./detalhes-filme.component.css'],
})
export class DetalhesFilmeComponent {
  favoritos: IFavoritosFilmes = { favoritosIds: [] };
  favoritado: boolean = false;
  filme: FilmeDetalhes = new FilmeDetalhes('', '', '', '', 0, [], '', '');
  filmeCreditos: FilmeCreditos = new FilmeCreditos();

  favoritarFilme() {
    if (!this.favoritado) {
      this.favoritado = true;
      this.favoritos.favoritosIds.push(parseInt(this.filme.id));
    } else {
      this.favoritado = false;
      let index = this.favoritos.favoritosIds.indexOf(parseInt(this.filme.id));
      this.favoritos.favoritosIds.splice(index);
    }
    this.repositorioFavoritos.salvarFavoritos(this.favoritos);
  }

  constructor(
    private filmeService: FilmeService,
    private repositorioFavoritos: RepositorioFilmesFavoritos,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.favoritos = this.repositorioFavoritos.carregarFavoritos();
    this.favoritado = this.favoritos.favoritosIds.includes(id);

    this.filmeService.obterDetalhesFilmePorId(id).subscribe((filme) => {
      this.filme = filme;
    });

    this.filmeService.obterCreditosFilmePorId(id).subscribe((creditos) => {
      this.filmeCreditos = creditos;
    });
  }
}
