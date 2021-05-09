import { Component } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {

  pokemons : any = [];
  pokemonsFilter : any = [];
  pkId : number = 0;

  constructor( private pokedexServices : PokedexService ) {
    
    this.pokedexServices.getAll().then( e => {

      this.pokemons = e;
      this.pokemonsFilter = e;

      // Iterando sobre la otra consulta a la api para añadir datos al primera array
      this.pokemons.forEach( ( e : any) => {

        this.pokedexServices.getPokedexDetails( e.name ).then( i => {

          e.id = i.id;
          e.imgPk = i.pkimg;
          e.type = i.type;
          e.order = i.order;
          e.xp = i.experience;

        } )
        
      });

    } )


  }

  selectPk( id : number ){

    this.pkId = id - 1;

  }


}
