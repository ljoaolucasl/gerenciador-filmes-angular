import { IFavoritosFilmes } from '../models/filme-favoritos';

export class RepositorioFilmesFavoritos {
  public carregarFavoritos(): IFavoritosFilmes {
    const favoritosJSON = localStorage.getItem('favoritos');
    if (favoritosJSON) {
      return JSON.parse(favoritosJSON);
    } else {
      return {
        favoritosIds: [],
      };
    }
  }

  public salvarFavoritos(favoritos: IFavoritosFilmes) {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }
}
