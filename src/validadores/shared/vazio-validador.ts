import { Validador } from '../validador';

export class VazioValidador implements Validador {
  valido(item: any): boolean {
    return item !== '';
  }
}
