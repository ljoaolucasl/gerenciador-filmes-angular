import { Component, Input } from '@angular/core';
import { FilmeLista } from 'src/app/models/filme-lista';
import { TipoLista } from 'src/app/models/tipo-lista';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-lista-filme',
  templateUrl: './lista-filme.component.html',
  styleUrls: ['./lista-filme.component.css'],
})
export class ListaFilmeComponent {
  @Input() tipoLista: TipoLista = 'EmAlta';
  filmes: FilmeLista[] = [];

  constructor(private filmeService: FilmeService) {}

  ngOnInit(): void {
    this.filmeService.obterListaFilmes(this.tipoLista).subscribe((filmes) => {
      this.filmes = filmes;
    });
  }
}
