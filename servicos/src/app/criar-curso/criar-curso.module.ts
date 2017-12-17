import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CriarCursoComponent } from './criar-curso.component';
import { CursosService } from '../cursos/cursos.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [CriarCursoComponent],
  declarations: [CriarCursoComponent],
  providers: [CursosService]
})
export class CriarCursoModule {}
