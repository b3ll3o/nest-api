import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from '../usuarios/usuarios.service';
import { AcessTokenDto } from './application/dto/acess-token.dto';
import { UsuarioLoginDto } from './application/dto/usuario-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, senha: string): Promise<any> {
    try {
      const usuario = await this.usuariosService.buscaPorEmail(email);
      if (usuario && usuario.senha === senha) {
        usuario.senha = undefined;
        return usuario;
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  async login(usuario: UsuarioLoginDto): Promise<AcessTokenDto> {
    const { email, senha } = usuario
    if(await this.validateUser(email, senha))
      return new AcessTokenDto(this.jwtService.sign({ email, senha }))
    return null
  }
}
