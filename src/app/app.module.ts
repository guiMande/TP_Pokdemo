import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { FilterPokemonPipe } from './pokemon/filter-pokemon.pipe';
import {HttpClientModule} from '@angular/common/http';
import {PokéAPIService} from './pokemon/pokéapi.service';
import { InfoPokemonComponent } from './info-pokemon-component/info-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    FilterPokemonPipe,
    InfoPokemonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PokéAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
