import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Login/login.component';
import { SingupComponent } from './Signup/signup.component';

const routes: Routes = [
  { path: ''     , component:HomeComponent},
  { path: 'login' , component:LoginComponent},
  { path: 'signup', component:SingupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
