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

  // teste email
  test('deve jogar um Error caso email seja undefined', () => {
    const novoUsuario = new NovoUsuarioDto(undefined, SENHA)
    expect(() => service.adicionaNovoUsuario(novoUsuario)).toThrowError()
  })

  test('deve jogar um Error caso email seja null', () => {
    const novoUsuario = new NovoUsuarioDto(null, SENHA)
    expect(() => service.adicionaNovoUsuario(novoUsuario)).toThrowError()
  })

  test('deve jogar um Error caso email seja vazio', () => {
    const novoUsuario = new NovoUsuarioDto('', SENHA)
    expect(() => service.adicionaNovoUsuario(novoUsuario)).toThrowError()
  })
});
