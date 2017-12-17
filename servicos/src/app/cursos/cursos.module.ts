import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';

@NgModule({
  imports: [CommonModule],
  exports: [CursosComponent],
  declarations: [CursosComponent],
  //providers: [CursosService]
})
export class CursosModule {}
