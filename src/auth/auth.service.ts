import { Injectable } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable()
export class AuthService {
  constructor(private usuariosService: UsuariosService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const usuario = await this.usuariosService.buscaPorEmail(username);
    if (usuario && usuario.senha === pass) {
      usuario.senha = undefined
      return usuario;
    }
    return null;
  }
}