import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { LazyServiceModule } from './lazy-service.module';

@Injectable({providedIn: LazyServiceModule})
export class Prueba1Service {

  constructor() { }

  getDatos = () => {
    return of(1);
  }
}
