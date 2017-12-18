import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private _cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      q => (this.pagina = q.pagina)
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    this.pagina++;
    this.router.navigate(['/cursos'], { queryParams: { pagina: this.pagina } });
  }

  paginaAnterior() {
    this.pagina--;
    this.router.navigate(['/cursos'], { queryParams: { pagina: this.pagina } });
  }
}
