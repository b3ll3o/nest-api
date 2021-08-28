import { Usuario } from '../../../domain/models/usuario';

describe('Usuario', () => {
  const EMAIL = 'email@email.com';
  const SENHA = 'senha';

  test('deve criar um novo usuario', () => {
    const usuario = new Usuario(1, EMAIL, SENHA);
    expect(usuario.email).toBe(EMAIL);
  });
});
