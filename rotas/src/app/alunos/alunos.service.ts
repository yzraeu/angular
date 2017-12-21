import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {
  private alunos: any[] = [
    { id: 1, nome: 'Aluno 1', email: 'aluno1@email.com' },
    { id: 2, nome: 'Aluno 2', email: 'aluno2@email.com' },
    { id: 3, nome: 'Aluno 3', email: 'aluno3@email.com' }
  ];

  constructor() {}

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    return this.alunos.find(a => a.id == id);
  }

  addAluno(aluno: any) {
    this.alunos.push(aluno);
  }
}
