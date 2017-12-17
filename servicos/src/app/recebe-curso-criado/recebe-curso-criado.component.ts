import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-recebe-curso-criado',
  templateUrl: './recebe-curso-criado.component.html',
  styleUrls: ['./recebe-curso-criado.component.css']
})
export class RecebeCursoCriadoComponent implements OnInit {
  curso: string;

  constructor(private _cursosService: CursosService) {}

  ngOnInit() {
    this._cursosService.emissorCurso.subscribe(curso => (this.curso = curso));
  }
}
