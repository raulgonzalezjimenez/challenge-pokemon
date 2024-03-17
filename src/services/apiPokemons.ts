import { IPoke } from '../interface/pokeCard';

export class ApiPokemons {
  url: string;

  constructor() {
    this.url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
  }

  getPokemons(): Promise<IPoke[]> {
    return fetch(this.url).then((response) => response.json());
  }
}
