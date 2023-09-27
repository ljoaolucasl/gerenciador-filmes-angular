import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FilmeService } from 'src/app/services/filme.service';
import { PersonDetail } from 'src/app/models/person-detalhes';

@Component({
  selector: 'app-lista-search-person',
  templateUrl: './lista-search-person.component.html',
  styleUrls: ['./lista-search-person.component.css'],
})
export class ListaSearchPersonComponent implements OnInit, OnChanges {
  @Input() query: string = '';
  totalPages: number = 2;
  persons: PersonDetail[] = [];

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
      .obterListaPersonSearch(this.query, page)
      .subscribe((resultado) => {
        this.persons = resultado.persons;
        this.totalPages = resultado.totalPages;
        console.log(this.persons);
        this.isLoading = false;
      });
  }
}
