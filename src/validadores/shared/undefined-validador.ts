import { Validador } from "../validador";

export class UndefinedValidador implements Validador {
  valido(item: any): boolean {
    return item !== undefined
  }
}