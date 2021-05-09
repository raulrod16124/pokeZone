import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor() { }

  getAll() : Promise<Pokemons[]> {

    return axios.get('https://pokeapi.co/api/v2/pokemon/?limit=150')
                .then( rest => rest.data )
                .then( pokemons => pokemons.results);


  }

  getPokedexDetails( id : any ) : Promise<Pokemon> {

    return axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
                .then( rest => rest.data )
                .then( (pkm : any) => {

                  return {

                    id : pkm.id,
                    name : pkm.name,
                    order : pkm.order,
                    experience : pkm.base_experience,
                    type : pkm.types[0].type.name,
                    height : pkm.height,
                    weight : pkm.weight,
                    moveOne : pkm.moves[0].move.name,
                    pkimg : pkm.sprites.front_default,

                  }

                } )

  }

}

export interface Pokemons {

  id : number;
  name : string;
  pkimg : string;
  type : string;

}

export interface Pokemon {

  id : number;
  name : string;
  order : number;
  experience : string;
  type : string;
  height : number;
  weight : number;
  moveOne : string;
  pkimg : string;

}
