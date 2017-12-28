import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { AlunosService } from '../alunos.service';
import { IFormCanDeactivate } from '../../guards/Iform-candeactivate';
@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {
  aluno: any;
  inscricao: Subscription;
  private formMudou = false;

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunosService
  ) {}

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      const id = params.id;

      this.aluno = this.alunoService.getAluno(id);

      if (this.aluno === null) {
        this.aluno = {};
      }
    });
  }

  onInput() {
    this.formMudou = true;
  }

  podeMudarRota() {
    if (this.formMudou) {
      if (confirm('Quer mesmo sair da pagina?')) {
        return true;
      } else {
        return false;
      }
    }

    return true;
  }

  podeDesativar() {
    return this.podeMudarRota();
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
