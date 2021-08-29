import * as EmailValidator from 'email-validator';


export class EmailValido {

  valido(email: string): boolean {
    return email !== undefined &&
    email !== null &&
    email !== '' &&
    EmailValidator.validate(email)
  }
}