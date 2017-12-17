import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosService]
})
export class CriarCursoComponent implements OnInit {
  nomeCurso: string;
  mensagemErro: string;
  cursos: string[] = [];

  constructor(private _cursosService: CursosService) {}

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();
  }

  adicionarCurso(evento) {
    const objetoRetorno = this._cursosService.addCurso(this.nomeCurso);
    console.log(objetoRetorno);
    if (objetoRetorno.ok) {
      this.mensagemErro = this.nomeCurso = '';
    } else {
      this.mensagemErro = objetoRetorno.mensagem;
    }
  }
}
