import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { Routing } from './app.routing';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, CursosComponent, CursoDetailComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    NoopAnimationsModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
