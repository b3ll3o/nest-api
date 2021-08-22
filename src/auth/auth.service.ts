import { Injectable } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable()
export class AuthService {
  constructor(private usuariosService: UsuariosService) {}

  async validateUser(email: string, senha: string): Promise<any> {
    try{
      const usuario = await this.usuariosService.buscaPorEmail(email);
      if (usuario && usuario.senha === senha) {
        usuario.senha = undefined;
        return usuario;
      }
      return null;
    }catch (e){
      return null
    }
  }
}
