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

  //teste senha
  test('deve jogar um Error caso senha seja undefined', () => {
    const novoUsuario = new NovoUsuarioDto(EMAIL, undefined)
    expect(() => service.adicionaNovoUsuario(novoUsuario)).toThrowError()
  })

  test('deve jogar um Error caso senha seja null', () => {
    const novoUsuario = new NovoUsuarioDto(EMAIL, null)
    expect(() => service.adicionaNovoUsuario(novoUsuario)).toThrowError()
  })

  test('deve jogar um Error caso senha seja vazio', () => {
    const novoUsuario = new NovoUsuarioDto(EMAIL, '')
    expect(() => service.adicionaNovoUsuario(novoUsuario)).toThrowError()
  })

  //teste cadastro
  test('deve retorna o usuario recem cadastrado', () => {
    const novoUsuario = new NovoUsuarioDto(EMAIL, SENHA)
    service.adicionaNovoUsuario(novoUsuario)
    const usuarios = service.listaUsuarios()
    expect(usuarios[0].id).toBe(1)
    expect(usuarios[0].email).toBe(EMAIL)
  })

  test('deve retorna os usuarios com identificação crescente', () => {
    const novoUsuario = new NovoUsuarioDto(EMAIL, SENHA)
    service.adicionaNovoUsuario(novoUsuario) 
    const novoUsuario2 = new NovoUsuarioDto('outro@outro.com', SENHA)
    service.adicionaNovoUsuario(novoUsuario2) 
    const usuarios = service.listaUsuarios()
    expect(usuarios[1].id).toBe(2)
    expect(usuarios[1].email).toBe('outro@outro.com')
  })

  test('não deve poder adicionar dois usuarios com mesmo email', () => {
    const novoUsuario = new NovoUsuarioDto(EMAIL, SENHA)
    service.adicionaNovoUsuario(novoUsuario) 
    expect(() => service.adicionaNovoUsuario(novoUsuario)).toThrowError()  
  })
});
