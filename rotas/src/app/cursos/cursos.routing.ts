import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CursosComponent } from './cursos.component';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const cursoRoutes: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoDetailComponent },
  { path: 'naoencontrado', component: CursoNaoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(cursoRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule {}
