import axios from 'axios';

export class Pokemon {

    get imageUrl():string {
        return `https://pokemon.com/${this.id}`;
    }

    constructor(
        public  readonly id:number, //El id no se puede modificar es solo de lectura
        public name:string
    ) {}

    scream () {
        console.log(`${this.name.toUpperCase()}!!!`);
    }
    speak ():String {
        return this.name;
    }

    async getMoves() {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/4');
        return data.moves;
    }
}

export const charmander = new Pokemon (4, 'charmander');
// charmander.name = 'new';
// console.log(charmander.imageUrl);
// charmander.scream();
// console.log(charmander.speak(), ' , ' ,charmander.speak());

charmander.getMoves();