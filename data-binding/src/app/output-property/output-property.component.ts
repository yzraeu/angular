import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef;

  constructor() {}

  ngOnInit() {}

  incrementa() {
    console.log(this.campoValorInput.nativeElement.value);

    this.campoValorInput.nativeElement.value++;
    this.disparaMudouValor(this.campoValorInput.nativeElement.value);
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--;
    this.disparaMudouValor(this.campoValorInput.nativeElement.value);
  }

  disparaMudouValor(valor: number) {
    this.mudouValor.emit({ novoValor: valor });
  }
}
