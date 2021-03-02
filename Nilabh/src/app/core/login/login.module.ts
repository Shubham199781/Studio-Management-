import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import {DemoMaterialModule} from './../../shared/material/material.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    DemoMaterialModule
  ]
})
export class LoginModule { }
