import * as EmailValidator from 'email-validator';

import { Injectable } from '@nestjs/common';
import { NovoUsuarioDto, UsuarioCadastradoDto } from './application/dtos';
import { Usuario } from './domain/models/usuario';
import { UsuarioAutenticavelDto } from './application/dtos/usuario-autenticavel.dto';

@Injectable()
export class UsuariosService {
  private usuarios: Usuario[];
  private contadorUsuarios: number;

  constructor() {
    this.usuarios = [new Usuario(1, "teste@teste.com", "teste")];
    this.contadorUsuarios = 2;
  }

  adicionaNovoUsuario(novoUsuario: NovoUsuarioDto): UsuarioCadastradoDto {
    if (
      novoUsuario.email === undefined ||
      novoUsuario.email === null ||
      novoUsuario.email === '' ||
      !EmailValidator.validate(novoUsuario.email)
    )
      throw new Error('Email inválido.');

    if (
      novoUsuario.senha === undefined ||
      novoUsuario.senha === null ||
      novoUsuario.senha === ''
    )
      throw new Error('Senha inválido.');

    const usuarioCadastrado = this.usuarios.find(
      (u) => u.email === novoUsuario.email,
    );
    if (usuarioCadastrado) throw new Error('Email já cadastrado.');

    this.usuarios.push(
      new Usuario(this.contadorUsuarios, novoUsuario.email, novoUsuario.senha),
    );

    return new UsuarioCadastradoDto(this.contadorUsuarios++, novoUsuario.email);
  }

  listaUsuarios(): UsuarioCadastradoDto[] {
    return this.usuarios.map((u) => new UsuarioCadastradoDto(u.id, u.email));
  }

  async buscaPorEmail(email: string): Promise<UsuarioAutenticavelDto> {
    const usuario = this.usuarios.find((u) => u.email === email);
    if (usuario)
      return new UsuarioAutenticavelDto(
        usuario.id,
        usuario.email,
        usuario.senha,
      );

    throw new Error('Usuario não encontrado.');
  }
}
