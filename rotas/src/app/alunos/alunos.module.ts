import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos.routing';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
  imports: [CommonModule, AlunosRoutingModule],
  declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent]
})
export class AlunosModule {}
