import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { NovoUsuarioDto, UsuarioCadastradoDto } from './application/dtos';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

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
  listaUsuarios(){
    return this.usuariosService.listaUsuarios()
  }
}
