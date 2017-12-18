import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {
  id: string;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  onOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
