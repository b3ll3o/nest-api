import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioLoginDto } from './application/dto/usuario-login.dto';
import { AuthService } from './auth.service';
import { Public } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Public()
  @Post('login')
  async login(@Body() usuarioLogin: UsuarioLoginDto){
    return this.authService.login(usuarioLogin)
  }
}
