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
    
    this.pokedexServices.getAll().then( e => {

      this.pokemons = e;
      this.pokemonsFilter = e;

      // Iterando sobre la otra consulta a la api para añadir datos al primera array
      this.pokemons.forEach( ( pokemon : any) => {

        this.pokedexServices.getPokedexDetails( pokemon.name ).then( i => {

          pokemon.id = i.id;
          pokemon.imgPk = i.pkimg;
          pokemon.type = i.type;
          pokemon.order = i.order;
          pokemon.xp = i.experience;

        } )
        
      });

    } )

    
    
  }

  ngOnInit(): void {
  }

}
