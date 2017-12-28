import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const APP_ROUTES: Routes = [
  {
    path: 'cursos',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    canActivateChild: [CursosGuard],
    loadChildren: 'app/cursos/cursos.module#CursosModule' // LazyLoading
  },
  {
    path: 'alunos',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: 'app/alunos/alunos.module#AlunosModule' // LazyLoading
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
