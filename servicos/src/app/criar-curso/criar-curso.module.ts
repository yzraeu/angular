import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CriarCursoComponent } from './criar-curso.component';
import { CursosService } from '../cursos/cursos.service';
import { RecebeCursoCriadoComponent } from '../recebe-curso-criado/recebe-curso-criado.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [CriarCursoComponent],
  declarations: [CriarCursoComponent, RecebeCursoCriadoComponent]
  //providers: [CursosService]
})
export class CriarCursoModule {}
