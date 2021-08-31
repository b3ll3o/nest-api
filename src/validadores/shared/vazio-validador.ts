import { ValidadorEntity } from '../validador.entity';

export class VazioValidador extends ValidadorEntity {
  protected verificaValidade(item: any): boolean {
    return item !== '';
  }
}
