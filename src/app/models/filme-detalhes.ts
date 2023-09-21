export class FilmeDetalhes {
  constructor(
    public id: string,
    public titulo: string,
    public cartaz: string,
    public descricao: string,
    public favoritado: number,
    public generos: string[],
    public banner: string,
    public video: string
  ) {
    this.id = id;
    this.titulo = titulo;
    this.cartaz = cartaz;
    this.descricao = descricao;
    this.favoritado = favoritado;
    this.generos = generos;
    this.banner = banner;
    this.video = video;
  }
}
