import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Prueba1RoutingModule } from './prueba1-routing.module';
import { Prueba1Component } from './views/prueba1/prueba1.component';
import { LazyServiceModule } from './services/lazy-service.module';


@NgModule({
  declarations: [Prueba1Component],
  imports: [
    CommonModule,
    Prueba1RoutingModule,
    LazyServiceModule
  ],
  providers: []
})
export class Prueba1Module { }
