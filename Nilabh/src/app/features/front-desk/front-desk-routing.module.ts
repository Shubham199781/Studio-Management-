import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontDeskComponent} from './front-desk.component';

const routes: Routes = [{
  path:'',
  component: FrontDeskComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontDeskRoutingModule { }
