import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktails !: Cocktail[];

  constructor() { }
  public getCocktails(): Cocktail[] {
    return this.cocktails
  };
}
