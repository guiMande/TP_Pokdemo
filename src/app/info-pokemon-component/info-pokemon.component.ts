import {Component, Input} from '@angular/core';
import {PokemonClass} from '../pokemon/pokemon-class';

@Component({
  selector: 'app-info-pokemon',
  template: `    
    Nom : {{pokemon.name}}<br>
    Id : {{pokemon.id}} <br>
    Poids : {{pokemon.weight}} <br> 
    Hauteur : {{pokemon.height}} <br>  <img height="200px" src={{pokemon.sprites.front_default}}>
  `
})
export class InfoPokemonComponent {
  @Input() pokemon: PokemonClass;
  constructor() { }
}
