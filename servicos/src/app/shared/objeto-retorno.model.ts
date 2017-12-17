export interface ObjetoRetorno {
  estado: Estado;
  mensagem: string;
}

enum Estado {
  NotSet,
  Ok,
  Erro
}
