import { Injectable } from '@angular/core';
import {Hero} from './models/hero-model';
import {HEROES} from './models/mock-heroes-model';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
