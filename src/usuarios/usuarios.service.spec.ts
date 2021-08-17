import { Test, TestingModule } from '@nestjs/testing';
import { NovoUsuarioDto } from './application/dtos/novo-usuario.dto';
import { UsuariosService } from './usuarios.service';

describe('UsuariosService', () => {
  const EMAIL = 'email@email.com'
  const SENHA = 'senha'
  
  let service: UsuariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariosService],
    }).compile();

    service = module.get<UsuariosService>(UsuariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('deve receber um NovoUsuarioDto e retorna um UsuarioCadastradoDto', () => {
    const novoUsuario = new NovoUsuarioDto(EMAIL, SENHA)
    const usuario = service.adicionaNovoUsuario(novoUsuario)
    expect(usuario.email).toBe(EMAIL)
    expect(usuario.id).toBeDefined()
  })
});
