import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css'],
})
export class InputOutputComponent implements OnInit {
  @Input() nomeCurso: string = '';

  constructor() {}

  ngOnInit() {}
}
