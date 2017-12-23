import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const APP_ROUTES: Routes = [
  { path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule'},
  { path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule'},
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
