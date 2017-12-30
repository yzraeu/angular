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

  consultaCEP(cep, formulario) {
    cep = cep.replace(/\D/g, '');

    if (cep === '') {
      return;
    }

    const validaCep = /^[0-9]{8}$/;

    if (!validaCep.test(cep)) {
      return;
    }

    this.limpaForm(formulario);

    this.http
      .get(`//viacep.com.br/ws/${cep}/json/`)
      .map(dados => dados.json())
      .subscribe(dados => this.populaDados(dados, formulario));
  }

  populaDados(dados, form: NgForm) {
    // form.setValue({
    //   nome: form.value.nome,
    //   email: form.value.email,
    //   endereco: {
    //     rua: dados.logradouro,
    //     cep: dados.cep,
    //     numero: '',
    //     complemento: dados.complemento,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    //   }
    // });

    form.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  limpaForm(form) {
    form.form.patchValue({
      endereco: {
        rua: '..',
        cep: '..',
        complemento: '..',
        bairro: '..',
        cidade: '..',
        estado: '..'
      }
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
