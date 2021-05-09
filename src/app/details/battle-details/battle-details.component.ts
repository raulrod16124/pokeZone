import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-battle-details',
  templateUrl: './battle-details.component.html',
  styleUrls: ['./battle-details.component.scss']
})
export class BattleDetailsComponent{

  pokemon : any = {};
  pokemonOpponent : any = {};
  myPoints : number = 0;
  oppPoints : number = 0;
  message : string = "";

  constructor( private pokemonServices : PokedexService, private route : ActivatedRoute ) {
    
    let id = this.route.snapshot.paramMap.get( 'id' );

    this.pokemonServices.getPokedexDetails( id ).then( pokemonSelected => this.pokemon = pokemonSelected );


  }

  randomOpponent(){

    // Condition finish

    let pkmSelection = document.querySelector('.pokemonSelection');
    let pkmOpp = document.querySelector('.pokemonOpponent');

    this.pokemonOpponent = {};

    let randomId = Math.round( Math.random() * (150 - 1) + 1);

    this.pokemonServices.getPokedexDetails( randomId ).then( randompkm => {

      this.pokemonOpponent = randompkm;

      // Section compare xp points
      if( this.pokemon.experience >  this.pokemonOpponent.experience){
  
        this.myPoints += 1;

        pkmSelection?.classList.remove('lose');
        pkmOpp?.classList.remove('win');

        pkmSelection?.classList.add('win');
        pkmOpp?.classList.add('lose');
        
      }

      if( this.pokemon.experience < this.pokemonOpponent.experience){
        
        this.oppPoints += 1;

        pkmSelection?.classList.remove('win');
        pkmOpp?.classList.remove('lose');

        pkmSelection?.classList.add('lose');
        pkmOpp?.classList.add('win');
        
      }

      if( this.pokemon.experience == this.pokemonOpponent.experience){

        pkmSelection?.classList.remove('lose');
        pkmSelection?.classList.remove('win');
        pkmOpp?.classList.remove('lose');
        pkmOpp?.classList.remove('win');

      }

      if( this.myPoints == 5 || this.oppPoints == 5 ){

        pkmSelection?.classList.remove('lose');
        pkmSelection?.classList.remove('win');
        pkmOpp?.classList.remove('lose');
        pkmOpp?.classList.remove('win');

        let endGame = document.querySelector('.content-endGame');
        let contentDataScore = document.querySelector('.content-scoreData');
        let score = document.querySelector('.score');
        
        endGame?.classList.add('show');
        contentDataScore?.classList.add('hide');
        
        if( this.myPoints == 5 ){
          
          this.message = "You WIN";
          score?.classList.add('win');
          
        }
        if( this.oppPoints == 5 ){
          
          this.message = "You LOSE";
          score?.classList.add('lose');
          
        }
        
        this.myPoints = 0;
        this.oppPoints = 0;

      }


    });



  }

  showPkm(){

    let whichPkm = document.querySelector('.whichPkm');
    let pkmOpponent = document.querySelector('.pokemonOpponent');

    whichPkm?.classList.add('hide');
    pkmOpponent?.classList.add('show');
    

  }

  resetBattle(){

    let contentDataScore = document.querySelector('.content-scoreData');
    contentDataScore?.classList.remove('hide');

    let whichPkm = document.querySelector('.whichPkm');
    let pkmOpponent = document.querySelector('.pokemonOpponent');

    whichPkm?.classList.remove('hide');
    pkmOpponent?.classList.remove('show');
    
    let pkmSelection = document.querySelector('.pokemonSelection');
    let pkmOpp = document.querySelector('.pokemonOpponent');

    pkmSelection?.classList.remove('win');
    pkmOpp?.classList.remove('lose');

    pkmSelection?.classList.remove('lose');
    pkmOpp?.classList.remove('win');

    let endGame = document.querySelector('.content-endGame');
    endGame?.classList.remove('show');
    
    let score = document.querySelector('.score');
    score?.classList.remove('win');
    score?.classList.remove('lose');


    this.myPoints = 0;
    this.oppPoints = 0;
        

  }





}
