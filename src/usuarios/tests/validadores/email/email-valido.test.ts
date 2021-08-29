import { EmailValido } from "../../../../usuarios/validadores/email/email-valido"

const EMAIL = 'email@email.com'
const EMAIL_INVALIDO = 'email_invalido'

describe('EmailValido', () => {

  test('deve retorna true caso email seja válido', () => {
    expect(new EmailValido().valido(EMAIL))
  })

  test('deve retorna false caso email seja inválido', () => {
    expect(new EmailValido().valido(EMAIL_INVALIDO))
  })
})