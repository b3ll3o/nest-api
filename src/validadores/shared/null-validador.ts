import { ValidadorEntity } from '../validador.entity';

export class NullValidador extends ValidadorEntity {
  protected verificaValidade(item: any): boolean {
    return item !== null;
  }
}
