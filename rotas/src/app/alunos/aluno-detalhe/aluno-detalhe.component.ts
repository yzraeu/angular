import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { AlunosService } from '../alunos.service';
import { Router } from '@angular/router';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  aluno: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunosService
  ) {}

  ngOnInit() {
    /* this.inscricao = this.route.params.subscribe((params: any) => {
      const id = params.id;

      this.aluno = this.alunoService.getAluno(id);
    });*/

    this.inscricao = this.route.data.subscribe((info: { aluno: Aluno }) => {
      this.aluno = info.aluno;
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarAluno(id: number) {
    this.router.navigate(['alunos', this.aluno.id, 'editar']);
  }
}
