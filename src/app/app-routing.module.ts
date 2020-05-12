import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
  path: 'login',
  loadChildren: () =>
    import('./modules/prueba1/prueba1.module').then(
      m => m.Prueba1Module
    )
},
{
  path: 'login2',
  loadChildren: () =>
    import('./modules/prueba2/prueba2.module').then(
      m => m.Prueba2Module
    )
},
{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: 'login'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
