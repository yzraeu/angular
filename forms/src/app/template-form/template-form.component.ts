import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(this.usuario);
  }

  campoValido(campo) {
    return !campo.valid && campo.touched;
  }
}
