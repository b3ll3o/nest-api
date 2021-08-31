import { Validador } from "./validador";

export abstract class ValidadorEntity implements Validador {

  proximoValidador: Validador

  constructor(validador: Validador){
    this.proximoValidador = validador ? validador : undefined
  }

  valido(item: any): boolean {
    if(this.proximoValidador){
      const res = this.proximoValidador.valido(item)
      if(!res)
        return res
    }
    return this.verificaValidade(item)
  }

  protected abstract verificaValidade(item): boolean
}