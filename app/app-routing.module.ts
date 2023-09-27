import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { OrderComponent } from './components/order/order.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';


const routes: Routes = [
  { path:'home', component:HomeComponent}, 

  { path:'cart' , component:CartComponent},
  { path:'header' , component:HeaderComponent},
  {path:'login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Order',component:OrderComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
