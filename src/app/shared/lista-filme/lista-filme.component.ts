import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FilmeLista } from 'src/app/models/filme-lista';
import { TipoLista } from 'src/app/models/tipo-lista';
import { FilmeService } from 'src/app/services/filme.service';
import { RepositorioFilmesFavoritos } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-lista-filme',
  templateUrl: './lista-filme.component.html',
  styleUrls: ['./lista-filme.component.css'],
})
export class ListaFilmeComponent implements OnInit {
  @Input() tipoLista: TipoLista = 'EmAlta';
  totalPages: number = 2;
  filmes: FilmeLista[] = [];
  isLoading: boolean = true;

  constructor(
    private filmeService: FilmeService,
    private repositorioFavoritos: RepositorioFilmesFavoritos
  ) {}

  ngOnInit(): void {
    this.repositorioFavoritos.favoritosAtualizados$.subscribe((item) => {
      if (this.tipoLista === 'Favoritos') {
        this.atualizarLista(1);
      }
    });

    this.atualizarLista(1);
  }

  atualizarLista(page: number) {
    this.isLoading = true;

    this.filmeService
      .obterListaFilmes(this.tipoLista, page, '')
      .subscribe((resultado) => {
        this.filmes = resultado.filmes;
        this.totalPages = resultado.totalPages;
        this.isLoading = false;
      });
  }
}
