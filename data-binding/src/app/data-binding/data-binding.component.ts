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
  buttonMessage: string = 'Me clique!';
  contagem: number = 0;
  valorAtual: string = '';
  valorSalvo: string = '';
  mousePorCima: boolean = false;
  textoMouse: string = 'Passe sobre mim';

  constructor() { }

  ngOnInit() {
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado(){
    this.contagem++;
    this.buttonMessage = 'Obrigado ' + this.contagem;
  }

  teclaPressionada (evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salva(valor: string){
    this.valorSalvo = valor;
  }

  mouseOverAndOut(){
    this.mousePorCima = !this.mousePorCima;
    this.textoMouse = this.mousePorCima ? 'Aaee' : 'Passe sobre mim';
  } 

}
