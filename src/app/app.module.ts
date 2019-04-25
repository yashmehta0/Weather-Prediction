import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import{FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CurrentComponent } from './current/current.component';
@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    CurrentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
