import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TableauPok} from './tableau-pok';
import {PokemonClass} from './pokemon-class';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class PokéAPIService {

  private url = 'https://pokeapi.co/api/v2/pokemon/';
  private url2: string;

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<TableauPok> {
    return this.http.get<TableauPok>(this.url);
  }

  getPokemon(name: string): Observable<PokemonClass> {
    this.url2 = this.url + name;
    return this.http.get<PokemonClass>(this.url2);
  }
}
