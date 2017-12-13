import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incrementa(){
    this.valor++;
    this.disparaMudouValor(this.valor);
  }

  decrementa(){
    this.valor--;
    this.disparaMudouValor(this.valor);
  }

  disparaMudouValor (valor: number){
    this.mudouValor.emit({novoValor: valor});
  }
}
