import * as EmailValidator from 'email-validator';
import { Validador } from '../../../validadores/validador';


export class EmailValidador implements Validador {

  valido(email: string): boolean {
    return email !== undefined &&
    email !== null &&
    email !== '' &&
    EmailValidator.validate(email)
  }
}