import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {
  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _cursosService: CursosService
  ) {}

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(params => {
      this.id = params.id;
      this.curso = this._cursosService.getCurso(this.id);
      if (this.curso === null || this.curso === undefined) {
        this.router.navigate(['/naoencontrado']);
      }
    });
  }

  onOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
