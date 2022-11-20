import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkdowneditorComponent } from './Markdowneditor/markdowneditor.component';
import { AddComponent } from './Add/add.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { ViewComponent } from './View/view.component';

const routes: Routes = [
  { path: ''      , component:DashboardComponent},
  { path: 'view'  , component:ViewComponent},
  { path: 'add'   , component:AddComponent},
  { path: 'editor', component:MarkdowneditorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
