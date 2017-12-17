import { Injectable } from '@angular/core';

@Injectable()
export class ObjetoRetornoModel {
  constructor(private _ok: boolean, private _mensagem: string) {
  }
}
