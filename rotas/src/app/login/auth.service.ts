import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable()
export class AuthService {
  private estaAutenticado = false;
  private admin = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  login(usuario: Usuario) {
    if (usuario.nome === 'teste' && usuario.senha === '123') {
      this.estaAutenticado = true;
      this.admin = false;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else if (usuario.nome === 'admin' && usuario.senha === '123') {
      this.estaAutenticado = true;
      this.admin = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.estaAutenticado = false;
      this.admin = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioAutenticado() {
    return this.estaAutenticado;
  }

  ehAdmin() {
    return this.admin;
  }
}
