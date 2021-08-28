import { Injectable } from '@nestjs/common';
import { Usuario } from '../models/usuario';

import * as EmailValidator from 'email-validator';

Injectable();
export class UsuariosService {
  private usuarios: Usuario[];
  private contadorUsuarios: number;

  constructor() {
    this.usuarios = [];
    this.contadorUsuarios = 1;
  }

  cadastraNovoUsuario(usuario: Usuario) {
    if (
      usuario.email === undefined ||
      usuario.email === null ||
      usuario.email === '' ||
      !EmailValidator.validate(usuario.email)
    )
      throw new Error('Email inválido.');

    if (
      usuario.senha === undefined ||
      usuario.senha === null ||
      usuario.senha === ''
    )
      throw new Error('Senha inválido.');

    const usuarioCadastrado = this.usuarios.find(
      (u) => u.email === usuario.email,
    );
    if (usuarioCadastrado) throw new Error('Email já cadastrado.');

    this.usuarios.push(
      new Usuario(this.contadorUsuarios, usuario.email, usuario.senha),
    );

    return new Usuario(this.contadorUsuarios++, usuario.email, undefined);
  }

  listaUsuarios(): Usuario[] {
    return [...this.usuarios];
  }

  async buscaPorEmail(usuario: Usuario): Promise<Usuario> {
    const usuarioEncontrado = this.usuarios.find(
      (u) => u.email === usuario.email,
    );
    if (usuarioEncontrado) return usuarioEncontrado;
    throw new Error('Usuario não encontrado.');
  }
}
