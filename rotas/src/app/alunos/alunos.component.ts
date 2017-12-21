import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos: any[];

  constructor(private alunosService: AlunosService, private router: Router) {}

  getAlunos() {
    this.alunos = this.alunosService.getAlunos();
  }

  ngOnInit() {
    this.getAlunos();
  }

  novoAluno() {
    this.router.navigate(['alunos/novo']);
  }
}
