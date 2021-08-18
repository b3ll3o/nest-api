import { Usuario } from "./usuario"

describe('Usuario', () => {

  const EMAIL = 'email@email.com'

  test('deve criar um novo usuario', () => {
    const usuario = new Usuario(1, EMAIL)
    expect(usuario.email).toBe(EMAIL)
  })
})