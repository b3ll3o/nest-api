import { Injectable } from '@nestjs/common';
import { NovoUsuarioDto, UsuarioCadastradoDto } from './application/dtos';

@Injectable()
export class UsuariosService {

  adicionaNovoUsuario(novoUsuario: NovoUsuarioDto): UsuarioCadastradoDto {
    if(novoUsuario.email === undefined || novoUsuario.email === null || novoUsuario.email === '')
      throw new Error('Email inválido.')
    return new UsuarioCadastradoDto(1, novoUsuario.email)
  }
}
