import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { FirstLazyModule } from '../first-lazy.module';

@Injectable({providedIn: FirstLazyModule})
export class Prueba1Service {

  constructor() { }

  getDatos = () => {
    return of(1);
  }
}
