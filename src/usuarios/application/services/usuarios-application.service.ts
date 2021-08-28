import { Injectable } from '@nestjs/common';
import { NovoUsuarioDto, UsuarioCadastradoDto } from '../dtos';
import { Usuario } from '../../domain/models/usuario';
import { UsuarioAutenticavelDto } from '../dtos/usuario-autenticavel.dto';
import { UsuariosService } from '../../../usuarios/domain/services/usuarios.service';

@Injectable()
export class UsuariosApplicationService {
  constructor(private service: UsuariosService) {}

  adicionaNovoUsuario(novoUsuario: NovoUsuarioDto): UsuarioCadastradoDto {
    const usuario = new Usuario(
      undefined,
      novoUsuario.email,
      novoUsuario.senha,
    );

    const usuarioCadastrado = this.service.cadastraNovoUsuario(usuario);

    return new UsuarioCadastradoDto(
      usuarioCadastrado.id,
      usuarioCadastrado.email,
    );
  }

  listaUsuarios(): UsuarioCadastradoDto[] {
    return this.service
      .listaUsuarios()
      .map((u) => new UsuarioCadastradoDto(u.id, u.email));
  }

  async buscaPorEmail(email: string): Promise<UsuarioAutenticavelDto> {
    const usuario = await this.service.buscaPorEmail(
      new Usuario(undefined, email, undefined),
    );
    if (usuario)
      return new UsuarioAutenticavelDto(
        usuario.id,
        usuario.email,
        usuario.senha,
      );

    throw new Error('Usuario não encontrado.');
  }
}
