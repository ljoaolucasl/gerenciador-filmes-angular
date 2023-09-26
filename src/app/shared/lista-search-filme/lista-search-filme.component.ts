import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FilmeService } from 'src/app/services/filme.service';
import { FilmeLista } from 'src/app/models/filme-lista';
@Component({
  selector: 'app-lista-search-filme',
  templateUrl: './lista-search-filme.component.html',
  styleUrls: ['./lista-search-filme.component.css'],
})
export class ListaSearchFilmeComponent implements OnInit, OnChanges {
  @Input() query: string = '';
  totalPages: number = 2;
  filmes: FilmeLista[] = [];

  isLoading: boolean = true;

  constructor(private filmeService: FilmeService) {}

  ngOnInit(): void {
    this.atualizarLista(1);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['query']) {
      this.atualizarLista(1);
    }
  }

  atualizarLista(page: number) {
    this.isLoading = true;

    this.filmeService
      .obterListaFilmes('Searcher', page, this.query)
      .subscribe((resultado) => {
        this.filmes = resultado.filmes;
        this.totalPages = resultado.totalPages;
        this.isLoading = false;
      });
  }
}
