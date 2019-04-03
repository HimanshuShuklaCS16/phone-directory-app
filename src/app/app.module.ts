import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material'; 
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './add/add.component';
import { CustomerinfoComponent } from './customerinfo/customerinfo.component';
import {RouterModule,Routes} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddComponent,
    CustomerinfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
