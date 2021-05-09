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
    
    this.pokedexServices.getAll().then( pkms => {

      this.pokemons = pkms;
      this.pokemonsFilter = pkms;

      // Iterando sobre la otra consulta a la api para añadir datos al primera array
      this.pokemons.forEach( ( pkm : any) => {

        this.pokedexServices.getPokedexDetails( pkm.name ).then( pkmdata => {

          pkm.id = pkmdata.id;
          pkm.imgPk = pkmdata.pkimg;
          pkm.type = pkmdata.type;
          pkm.order = pkmdata.order;
          pkm.xp = pkmdata.experience;

        } )
        
      });

    } )


  }

  selectPk( id : number ){

    this.pkId = id - 1;

  }


}
