import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunosRoutingModule } from './alunos.routing';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

import { AlunosService } from './alunos.service';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './guards/alunos-detalhe.resolver';

@NgModule({
  imports: [CommonModule, FormsModule, AlunosRoutingModule],
  declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
  providers: [
    AlunosService,
    AlunosGuard,
    AlunosDeactivateGuard,
    AlunoDetalheResolver
  ]
})
export class AlunosModule {}
