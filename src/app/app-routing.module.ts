import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattleComponent } from './componets/battle/battle.component';
import { HoldComponent } from './componets/hold/hold.component';
import { PokedexComponent } from './componets/pokedex/pokedex.component';
import { BattleDetailsComponent } from './details/battle-details/battle-details.component';
import { PokedexDetailsComponent } from './details/pokedex-details/pokedex-details.component';

const routes: Routes = [

  {
    path: '',
    component: HoldComponent
  },
  {
    path: 'pokedex',
    component: PokedexComponent
  },
  {
    path: 'pokedex/:id',
    component: PokedexDetailsComponent
  },
  {
    path: 'battle',
    component: BattleComponent
  },
  {
    path: 'battle/:id',
    component: BattleDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
