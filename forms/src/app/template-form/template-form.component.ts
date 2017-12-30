import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  usuario: any = {
    nome: '',
    email: ''
  };

  constructor(private http: Http) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(this.usuario);
  }

  consultaCEP(cep) {
    cep = cep.replace(/\D/g, '');

    if (cep === '') {
      return;
    }

    const validaCep = /^[0-9]{8}$/;

    if (!validaCep.test(cep)) {
      return;
    }

    this.http
      .get(`//viacep.com.br/ws/${cep}/json/`)
      .map(dados => dados.json())
      .subscribe(dados => {
        console.log(dados);
      });
  }

  campoValido(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.campoValido(campo),
      'has-feedback': this.campoValido(campo)
    };
  }
}
