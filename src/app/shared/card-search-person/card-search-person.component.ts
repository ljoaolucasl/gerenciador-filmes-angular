import { Component, Input, OnInit } from '@angular/core';
import { IFavoritosFilmes } from 'src/app/models/filme-favoritos';
import { FilmeLista } from 'src/app/models/filme-lista';
import { PersonDetail } from 'src/app/models/person-detalhes';
import { RepositorioFilmesFavoritos } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-card-search-person',
  templateUrl: './card-search-person.component.html',
  styleUrls: ['./card-search-person.component.css'],
})
export class CardSearchPersonComponent implements OnInit {
  @Input() person: PersonDetail = new PersonDetail('', '', '', 0, '', []);
  favoritos: IFavoritosFilmes = { favoritosIds: [] };
  idPerson: number = 0;

  constructor(private repositorioFavoritos: RepositorioFilmesFavoritos) {}

  ngOnInit(): void {
    this.favoritos = this.repositorioFavoritos.carregarFavoritos();
    this.idPerson = parseInt(this.person.id);
  }
}
