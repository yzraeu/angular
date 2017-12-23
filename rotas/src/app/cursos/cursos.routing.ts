import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CursosComponent } from './cursos.component';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const cursoRoutes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'naoencontrado', component: CursoNaoEncontradoComponent },
  { path: ':id', component: CursoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(cursoRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule {}
