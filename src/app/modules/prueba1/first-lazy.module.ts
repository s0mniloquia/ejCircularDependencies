import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstLazyRoutingModule } from './first-lazy-routing.module';
import { Prueba1Component } from './views/prueba1/prueba1.component';


@NgModule({
  declarations: [Prueba1Component],
  imports: [ CommonModule, FirstLazyRoutingModule ]
})
export class FirstLazyModule { }
