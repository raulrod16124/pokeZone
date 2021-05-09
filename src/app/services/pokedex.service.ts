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
                .then( p => p.results);


  }

  getPokedexDetails( id : any ) : Promise<Pokemon> {

    return axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
                .then( rest => rest.data )
                .then( (p : any) => {

                  return {

                    id : p.id,
                    name : p.name,
                    order : p.order,
                    experience : p.base_experience,
                    type : p.types[0].type.name,
                    height : p.height,
                    weight : p.weight,
                    moveOne : p.moves[0].move.name,
                    pkimg : p.sprites.front_default,

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
