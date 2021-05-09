import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokedex-details',
  templateUrl: './pokedex-details.component.html',
  styleUrls: ['./pokedex-details.component.scss']
})
export class PokedexDetailsComponent {

  pokemon : any = {};

  constructor( private pokemonServices : PokedexService, private route : ActivatedRoute ) {

    let id = this.route.snapshot.paramMap.get( 'id' );

    this.pokemonServices.getPokedexDetails( id ).then( e => this.pokemon = e );


  }




}
