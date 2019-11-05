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
import { HttpClientModule } from '@angular/common/http';


import * as $ from 'jquery';
import { MovieService } from './service/movie.service';

import { LOCALE_ID } from '@angular/core';


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
    HttpClientModule,
    RouterModule.forRoot(RouteRoutes)
  ],
  providers: [
    MovieService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
