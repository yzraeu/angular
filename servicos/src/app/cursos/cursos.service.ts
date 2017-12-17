import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {
  static emissorCursoGlobal = new EventEmitter<string>();

  private cursos: string[] = ['Angular2', '.NET', 'Xamarin'];

  emissorCurso = new EventEmitter<string>();

  constructor(private _logger: LogService) {
    this._logger.log('CursosService');
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(nomeCurso: string) {
    if (nomeCurso == null || nomeCurso === '') {
      this._logger.log('nome de curso inválido');
      return { ok: false, mensagem: 'nome de curso inválido' };
    }

    if (this.cursos.indexOf(nomeCurso) > 0) {
      this._logger.log('nome de curso já existe');
      return { ok: false, mensagem: 'nome de curso já existe' };
    }

    this._logger.log('curso ok. criando..');
    this.cursos.push(nomeCurso);
    this._logger.log('propagando notificação..');
    this.emissorCurso.emit(nomeCurso);
    CursosService.emissorCursoGlobal.emit(nomeCurso);
    this._logger.log('tudo ok!');
    return { ok: true, mensagem: null };
  }
}
