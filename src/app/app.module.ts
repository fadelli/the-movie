import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouteRoutes } from './route.routing';
import { MovieComponent } from './pages/movie/movie.component';
import { Select2Module } from 'ng2-select2';

import * as $ from 'jquery';
declare var jQuery;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    Select2Module,
    RouterModule.forRoot(RouteRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
