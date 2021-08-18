import { Injectable } from '@nestjs/common';
import { NovoUsuarioDto, UsuarioCadastradoDto } from './application/dtos';
import { Usuario } from './domain/models/usuario';

@Injectable()
export class UsuariosService {

  usuarios: Usuario[]
  contadorUsuarios: number

  constructor(){
    this.usuarios = []
    this.contadorUsuarios = 1
  }

  adicionaNovoUsuario(novoUsuario: NovoUsuarioDto): UsuarioCadastradoDto {
    if(novoUsuario.email === undefined || novoUsuario.email === null || novoUsuario.email === '')
      throw new Error('Email inválido.')

    if(novoUsuario.senha === undefined || novoUsuario.senha === null || novoUsuario.senha === '')
      throw new Error('Senha inválido.')

    this.usuarios.push(new Usuario(this.contadorUsuarios, novoUsuario.email))
    this.contadorUsuarios++

    return new UsuarioCadastradoDto(1, novoUsuario.email)
  }

  listaUsuarios(): UsuarioCadastradoDto[] {
    return this.usuarios.map(u => new UsuarioCadastradoDto(u.id, u.email))
  }
}
