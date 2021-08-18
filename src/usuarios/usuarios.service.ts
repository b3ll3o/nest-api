import { Injectable } from '@nestjs/common';
import { NovoUsuarioDto, UsuarioCadastradoDto } from './application/dtos';

@Injectable()
export class UsuariosService {

  adicionaNovoUsuario(novoUsuario: NovoUsuarioDto): UsuarioCadastradoDto {
    if(novoUsuario.email === undefined || novoUsuario.email === null || novoUsuario.email === '')
      throw new Error('Email inválido.')

    if(novoUsuario.senha === undefined || novoUsuario.senha === null || novoUsuario.senha === '')
      throw new Error('Senha inválido.')

    return new UsuarioCadastradoDto(1, novoUsuario.email)
  }
}
