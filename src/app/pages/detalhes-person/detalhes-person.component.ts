import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeCreditos } from 'src/app/models/filme-creditos';
import { FilmeDetalhes } from 'src/app/models/filme-detalhes';
import { IFavoritosFilmes } from 'src/app/models/filme-favoritos';
import { FilmeLista } from 'src/app/models/filme-lista';
import { PersonDetail } from 'src/app/models/person-detalhes';
import { FilmeService } from 'src/app/services/filme.service';
import { RepositorioFilmesFavoritos } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-detalhes-person',
  templateUrl: './detalhes-person.component.html',
  styleUrls: ['./detalhes-person.component.css'],
})
export class DetalhesPersonComponent {
  favoritos: IFavoritosFilmes = { favoritosIds: [] };
  person: PersonDetail = new PersonDetail('', '', '', 0, '', []);

  constructor(
    private filmeService: FilmeService,
    private repositorioFavoritos: RepositorioFilmesFavoritos,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.favoritos = this.repositorioFavoritos.carregarFavoritos();

    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.filmeService.obterDetalhesPersonPorId(id).subscribe((person) => {
      this.person = person;
    });
  }
}
