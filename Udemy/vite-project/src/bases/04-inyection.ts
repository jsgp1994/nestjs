import axios from 'axios';
import { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface';
import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl():string {
        return `https://pokemon.com/${this.id}`;
    }

    constructor(
        public  readonly id:number, //El id no se puede modificar es solo de lectura
        public name:string,
        //Inyección de dependencias
        private readonly http:HttpAdapter
    ) {}

    scream () {
        console.log(`${this.name.toUpperCase()}!!!`);
    }
    speak ():String {
        return this.name;
    }

    async getMoves(): Promise<Move[]> {
        const data  = await this.http.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data);
        return data.moves;
    }
}

const pokeApi = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter()

export const charmander = new Pokemon (4, 'charmander', pokeApi);
// charmander.name = 'new';
// console.log(charmander.imageUrl);
// charmander.scream();
// console.log(charmander.speak(), ' , ' ,charmander.speak());

charmander.getMoves();