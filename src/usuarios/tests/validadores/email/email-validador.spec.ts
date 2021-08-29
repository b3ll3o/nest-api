import { EmailValidador } from '../../../validadores/email/email-validador';
import { EMAIL, EMAIL_INVALIDO } from '../../constantes';

describe('EmailValidador', () => {
  test('deve retorna true caso email seja válido', () => {
    expect(new EmailValidador().valido(EMAIL));
  });

  test('deve retorna false caso email seja inválido', () => {
    expect(new EmailValidador().valido(EMAIL_INVALIDO));
  });
});
