import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

// Application routes
const routes: Routes = [
  {
    path :'',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'products',
    component : ProductsComponent
  },
  {
    path : 'login',
    loadChildren : () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path : 'register',
    loadChildren : () => import('./register/register.module').then(m => m.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
