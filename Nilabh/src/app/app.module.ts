import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DemoMaterialModule } from './shared/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderComponent} from './shared/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
