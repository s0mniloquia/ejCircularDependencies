import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Prueba1Service } from './prueba1.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LazyServiceModule } from './lazy-service.module';

@Injectable({providedIn: LazyServiceModule})
export class Prueba1ResolveService implements Resolve<number> {

  constructor(private _prueba1Service: Prueba1Service) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): number | Observable<number> | Promise<number> {
    return this._prueba1Service.getDatos().pipe(tap(value=>console.log(`El valor es ${value}`)));
  }
}
