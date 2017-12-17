import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  private cursos: string[] = ['Angular2', '.NET', 'Xamarin'];

  constructor() {
    console.log('CursosService');
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(nomeCurso: string) {
    if (nomeCurso == null || nomeCurso === '') {
      return { ok: false, mensagem: 'nome de curso inválido' };
    }

    if (this.cursos.indexOf(nomeCurso) > 0) {
      return { ok: false, mensagem: 'nome de curso já existe' };
    }

    this.cursos.push(nomeCurso);

    return { ok: true, mensagem: null };
  }
}
