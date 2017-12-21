import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CursosComponent } from './cursos.component';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosService } from './cursos.service';

import { CursosRoutingModule } from './cursos.routing';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetailComponent,
    CursoNaoEncontradoComponent
  ],
  imports: [CommonModule, FormsModule, CursosRoutingModule],
  exports: [],
  providers: [CursosService]
})
export class CursosModule {}
