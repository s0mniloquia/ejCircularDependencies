import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Prueba1Component } from './views/prueba1/prueba1.component';
import { Prueba1ResolveService } from './services/prueba1-resolve.service';


const routes: Routes = [
  {
    path: '', component: Prueba1Component, resolve: { data: Prueba1ResolveService }
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Prueba1RoutingModule { }
