import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url = 'http://loiane.com';
  cursoAngular = true;
  urlImagem = 'http://lorempixel.com/400/200/sports';
  buttonMessage = 'Me clique!';
  contagem = 0;
  valorAtual = '';
  valorSalvo = '';
  mousePorCima = false;
  textoMouse = 'Passe sobre mim';

  nome = 'abc';

  pessoa: any = { nome: 'Eu', idade: 20 };

  constructor() {}

  ngOnInit() {}

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    this.contagem++;
    this.buttonMessage = 'Obrigado ' + this.contagem;
  }

  teclaPressionada(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salva(valor: string) {
    this.valorSalvo = valor;
  }

  mouseOverAndOut() {
    this.mousePorCima = !this.mousePorCima;
    this.textoMouse = this.mousePorCima ? 'Aaee' : 'Passe sobre mim';
  }
}
