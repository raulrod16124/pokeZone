import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoldComponent } from './componets/hold/hold.component';
import { PokedexComponent } from './componets/pokedex/pokedex.component';
import { PokedexDetailsComponent } from './details/pokedex-details/pokedex-details.component';
import { BattleComponent } from './componets/battle/battle.component';
import { BattleDetailsComponent } from './details/battle-details/battle-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HoldComponent,
    PokedexComponent,
    PokedexDetailsComponent,
    BattleComponent,
    BattleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
