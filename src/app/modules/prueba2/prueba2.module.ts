import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Prueba2RoutingModule } from './prueba2-routing.module';
import { Prueba2Component } from './views/prueba2/prueba2.component';


@NgModule({
  declarations: [Prueba2Component],
  imports: [
    CommonModule,
    Prueba2RoutingModule
  ]
})
export class Prueba2Module { }
