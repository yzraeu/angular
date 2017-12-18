import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  constructor() {}

  getCursos() {
    return [{ id: 1, nome: 'Angular' }, { id: 2, nome: '.NET' }];
  }

  getCurso(id: number) {
    const cursos = this.getCursos();
    return cursos.find(c => c.id == id);
  }
}
