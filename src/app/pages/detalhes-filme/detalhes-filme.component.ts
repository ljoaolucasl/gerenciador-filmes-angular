import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeDetalhes } from 'src/app/models/filme-detalhes';
import { IFavoritosFilmes } from 'src/app/models/filme-favoritos';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.component.html',
  styleUrls: ['./detalhes-filme.component.css'],
})
export class DetalhesFilmeComponent {
  favorito!: IFavoritosFilmes;
  filme: FilmeDetalhes = new FilmeDetalhes('', '', '', '', 0, [], '', '');
  favoritarFilme() {}

  constructor(
    private filmeService: FilmeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.filmeService.obterDetalhesFilmePorId(id).subscribe((filme) => {
      this.filme = filme;
    });
  }
}
