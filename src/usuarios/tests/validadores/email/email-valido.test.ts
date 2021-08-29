import { EmailValidador } from "../../../validadores/email/email-validador"

const EMAIL = 'email@email.com'
const EMAIL_INVALIDO = 'email_invalido'

describe('EmailValido', () => {

  test('deve retorna true caso email seja válido', () => {
    expect(new EmailValidador().valido(EMAIL))
  })

  test('deve retorna false caso email seja inválido', () => {
    expect(new EmailValidador().valido(EMAIL_INVALIDO))
  })
})