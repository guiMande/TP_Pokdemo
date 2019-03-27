import { Pipe, PipeTransform } from '@angular/core';
import {PokemonClass} from './pokemon-class';

@Pipe({
  name: 'filterPokemon'
})
export class FilterPokemonPipe implements PipeTransform {

  transform(Pokemons: PokemonClass[], searchText: string): any[] {
    if (!Pokemons) { return []; }
    if (!searchText) { return Pokemons; }
    return Pokemons.filter(Pokemon => Pokemon.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }

  transformId(Pokemons: PokemonClass[], id: string): any[] {
    if (!Pokemons) { return []; }
    if (!id) { return Pokemons; }
    return Pokemons.filter(Pokemon => Pokemon.id.toLowerCase().indexOf(id.toLowerCase()) !== -1);
  }
}



