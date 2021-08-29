import { NullValidador } from '../../../validadores/shared/null-validador';

describe('NullValidador', () => {
  test('deve retorna true quando item passado não for null', () => {
    expect(new NullValidador().valido('')).toBeTruthy();
  });

  test('deve retorna false quando item passado for null', () => {
    expect(new NullValidador().valido(null)).toBeFalsy();
  });
});
