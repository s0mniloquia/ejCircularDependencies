import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Prueba1Service } from './prueba1.service';
import { tap } from 'rxjs/operators';
import { FirstLazyModule } from '../first-lazy.module';

@Injectable({providedIn: FirstLazyModule})
export class Prueba1ResolveService implements Resolve<number> {

  constructor(private _prueba1Service: Prueba1Service) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._prueba1Service.getDatos();
  }
}
