import { FilmeLista } from './filme-lista';

export class PersonDetail {
  constructor(
    public id: string,
    public nome: string,
    public imagem: string,
    public popularidade: number,
    public biografia?: string,
    public filmes?: FilmeLista[]
  ) {
    this.id = id;
    this.nome = nome;
    this.biografia = biografia;
    this.popularidade = popularidade;
    this.imagem = imagem;
    this.filmes = filmes;
  }
}
