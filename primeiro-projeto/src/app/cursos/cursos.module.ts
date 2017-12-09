import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CursosComponent],
  declarations: [CursosComponent, CursoDetalheComponent]
})
export class CursosModule { }
