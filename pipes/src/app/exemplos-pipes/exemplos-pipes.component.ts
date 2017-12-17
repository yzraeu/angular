import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {
  livros: string[] = ['Angular2', 'Xamarin'];
  livro: any = {
    titulo: 'Learning JavaScript Data Structures',
    avaliacao: 4.54321,
    paginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };
  filtro: string;

  constructor() {}

  ngOnInit() {}

  addCurso(valor) {
    this.livros.push(valor);
  }

  obterCursos() {
    if (
      this.livros.length === 0 ||
      this.filtro === undefined ||
      this.filtro.trim() === ''
    ) {
      return this.livros;
    }

    return this.livros.filter(v => {
      if (v.toLocaleLowerCase().indexOf(this.filtro) > -1) {
        return true;
      }

      return false;
    });
  }
}
