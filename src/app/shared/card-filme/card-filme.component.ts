import { Component, Input } from '@angular/core';
import { IFavoritosFilmes } from 'src/app/models/filme-favoritos';
import { FilmeLista } from 'src/app/models/filme-lista';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.css'],
})
export class CardFilmeComponent {
  @Input() filme: FilmeLista = new FilmeLista('', '', '', '', '');
  favoritos: IFavoritosFilmes = { favoritosIds: [] };
  idFilme: number = parseInt(this.filme.id);

  constructor() {}
}
