import { Validador } from '../validador';

export class NullValidador implements Validador {
  valido(item: any): boolean {
    return item !== null;
  }
}
