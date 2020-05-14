import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
  path: 'login',
  loadChildren: () =>
    import('./modules/prueba1/first-lazy.module').then(
      m => m.FirstLazyModule
    )
},
{
  path: 'login2',
  loadChildren: () =>
    import('./modules/prueba2/second-lazy.module').then(
      m => m.SecondLazyModule
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
