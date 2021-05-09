import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

  pokemons : any = [];
  pokemonsFilter : any = [];
  pkId : number = 0;

  constructor( private pokedexServices : PokedexService ) {
    
    this.pokedexServices.getAll().then( pkms => {

      this.pokemons = pkms;
      this.pokemonsFilter = pkms;

      // Iterando sobre la otra consulta a la api para añadir datos al primera array
      this.pokemons.forEach( ( pokemon : any) => {

        this.pokedexServices.getPokedexDetails( pokemon.name ).then( pkdata => {

          pokemon.id = pkdata.id;
          pokemon.imgPk = pkdata.pkimg;
          pokemon.type = pkdata.type;
          pokemon.order = pkdata.order;
          pokemon.xp = pkdata.experience;

        } )
        
      });

    } )

    
    
  }

  ngOnInit(): void {
  }

}
