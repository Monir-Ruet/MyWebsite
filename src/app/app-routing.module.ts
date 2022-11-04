import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'',loadChildren:()=>import('./Components/Dashboard/dashboard.module').then(mod=>mod.DashboardModule) },
  { path:'posts',loadChildren:()=>import('./Components/Posts/post.module').then(mod=>mod.PostModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
