import {Component, Input} from '@angular/core';
import {PokemonClass} from '../pokemon/pokemon-class';

@Component({
  selector: 'app-info-pokemon',
  template: `
    <br>
    Nom : {{pokemon.name}} <br>
    Id : {{pokemon.id}} <br>
    Poids : {{pokemon.weight}} <br>
    Hauteur : {{pokemon.height}}
  `
})
export class InfoPokemonComponent {
  @Input() pokemon: PokemonClass;
  constructor() { }
}
