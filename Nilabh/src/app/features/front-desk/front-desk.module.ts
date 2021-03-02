import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from "./../../shared/material/material.module";
import { FrontDeskRoutingModule } from './front-desk-routing.module';
import { FrontDeskComponent } from './front-desk.component';

@NgModule({
  declarations: [FrontDeskComponent],
  imports: [
    CommonModule,
    FrontDeskRoutingModule,
    DemoMaterialModule
  ]
})
export class FrontDeskModule { }
