import { ValidadorEntity } from '../validador.entity';

export class UndefinedValidador extends ValidadorEntity {
  protected verificaValidade(item: any): boolean {
    return item !== undefined;
  }
}
