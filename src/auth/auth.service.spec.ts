import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

describe('AuthService', () => {
  const EMAIL = 'email@email.com';
  const SENHA = 'senha';

  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UsuariosModule.register(false), PassportModule],
      providers: [AuthService, LocalStrategy],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('deve retorna um usuario autenticavel', async () => {
    const usuario = await service.validateUser(EMAIL, SENHA);
    expect(usuario).toBeDefined();
  });

  test('deve retorna null caso usuario não seja encontrado', async () => {
    const usuario = await service.validateUser(undefined, undefined);
    expect(usuario).toBeNull();
  });
});
