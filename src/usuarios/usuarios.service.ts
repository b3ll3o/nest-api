import { Injectable } from '@nestjs/common';
import { NovoUsuarioDto, UsuarioCadastradoDto } from './application/dtos';

@Injectable()
export class UsuariosService {

  adicionaNovoUsuario(novoUsuario: NovoUsuarioDto): UsuarioCadastradoDto {
    return new UsuarioCadastradoDto(1, novoUsuario.email)
  }
}
