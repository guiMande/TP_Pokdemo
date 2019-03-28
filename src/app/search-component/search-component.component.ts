import {Component, OnInit} from '@angular/core';

import { FilterPokemonPipe } from '../pokemon/filter-pokemon.pipe';
import { PokéAPIService} from '../pokemon/pokéapi.service';
import {TableauPok} from '../pokemon/tableau-pok';
import {PokemonClass} from '../pokemon/pokemon-class';

@Component({
  selector: 'app-search-component',
  template: `
    <div>
    <input [(ngModel)]="id" placeholder="Id du pokemon"/>
    <input readonly value="{{id}}" /><br>
    <input [(ngModel)]="searchText" placeholder="Nom du pokemon"/>
    <button (click)="filter(searchText)"> Go ! </button><br>       <h3> Pokedex :</h3>
    <ul>
      <li  *ngFor="let poke of tab.results">
        {{poke.name}} <button id="btn_{{poke.name}}" (click)="getAttributes(poke)"> Info </button>
      </li>
    </ul>
    </div>
    <div>
      <app-info-pokemon [pokemon]="pokemon"></app-info-pokemon>
    </div>
  `
})
export class SearchComponentComponent implements OnInit {
  id: string;
  searchText: string;
  pokemon: PokemonClass;
  filterPokemon = new FilterPokemonPipe();
  tab: TableauPok;
  constructor(private pokeService: PokéAPIService) {}
  ngOnInit() {
    this.pokeService.getPokemons().subscribe(res => {
      this.tab = res;
    });
  }
  filter(searchText) {
    if (this.searchText === '') {
      this.ngOnInit();
    }
    this.tab.results = this.filterPokemon.transform(this.tab.results, searchText);
  }
  getAttributes(pokemon: PokemonClass) {
    this.pokeService.getPokemon(pokemon.name).subscribe(res => {
      this.pokemon = res;
    });
  }
}
