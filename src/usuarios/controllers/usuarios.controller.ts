import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { Public } from '../../auth/jwt-auth.guard';
import { NovoUsuarioDto, UsuarioCadastradoDto } from '../application/dtos';
import { UsuariosApplicationService } from '../application/services/usuarios-application.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosApplicationService) {}

  @Public()
  @Post()
  adicionaNovoUsuario(
    @Body() novoUsuario: NovoUsuarioDto,
  ): UsuarioCadastradoDto | BadRequestException {
    try {
      return this.usuariosService.adicionaNovoUsuario(novoUsuario);
    } catch (e) {
      return new BadRequestException(e);
    }
  }

  @Get()
  listaUsuarios() {
    return this.usuariosService.listaUsuarios();
  }
}
