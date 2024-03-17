/* eslint-disable capitalized-comments */
import { Component } from './component';
// import { IPoke } from '../interface/pokeCard';
import { ApiPokemons } from '../services/apiPokemons';

export class Main extends Component {
  pokemons: any;
  // nextPokemons: IPoke[];
  // previousPokemons: IPoke[];
  apiPokemons: ApiPokemons;
  detailsPokemons: any;

  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
    // this.template = this.createTemplate();
    this.pokemons = [];
    // this.nextPokemons = [];
    // this.previousPokemons = [];
    this.apiPokemons = new ApiPokemons();
    this.detailsPokemons = '';
    console.log('pokemons', this.startFetch());
    this.startFetch();
  }

  async startFetch() {
    this.pokemons = await this.apiPokemons.getPokemons();

    const pokemonsResult: any = [];
    this.pokemons.results.forEach((item: any) => {
      pokemonsResult.push(item.url);
    });
    this.detailsPokemons = await Promise.all(
      pokemonsResult.map((url: string) =>
        fetch(url).then((response) => response.json())
      )
    );
  }

  createTemplate() {
    this.detailsPokemons?.forEach((pokemon: any) => {
      this.template = `
        <main>
    <div>
      ${pokemon.species.name}
  </div>
    </main>
    `;
    });
    return this.template;

    //   return `
    //   <main>
    //       <div>hola desde main</div>

    //  </main>
    //  `;
  }
}
