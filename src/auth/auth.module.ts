import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UsuariosModule.register(), PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
