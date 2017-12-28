import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable()
export class AuthService {
  private estaAutenticado = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  login(usuario: Usuario) {
    if (usuario.nome === 'teste' && usuario.senha === '123') {
      this.estaAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.estaAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioAutenticado() {
    return this.estaAutenticado;
  }
}
