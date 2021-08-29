import { VazioValidador } from '../../../validadores/shared/vazio-validador';

describe('VazioValidador', () => {
  test('deve retorna false caso seja igual a vazio', () => {
    expect(new VazioValidador().valido('')).toBeFalsy();
  });

  test('deve retorna true caso não seja igual a vazio', () => {
    expect(new VazioValidador().valido(undefined)).toBeTruthy();
  });
});
