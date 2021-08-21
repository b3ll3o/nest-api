import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { NovoUsuarioDto, UsuarioCadastradoDto } from './application/dtos';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';

describe('UsuariosController', () => {
  const EMAIL = 'email@email.com';
  const SENHA = 'senha';
  const EMAIL_INVALIDO = 'email_invalido';

  let controller: UsuariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosController],
      providers: [UsuariosService],
    }).compile();

    controller = module.get<UsuariosController>(UsuariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  test('deve adicionar um novo usuario', () => {
    const novoUsuario = new NovoUsuarioDto(EMAIL, SENHA);
    const res = controller.adicionaNovoUsuario(
      novoUsuario,
    ) as UsuarioCadastradoDto;
    expect(res.email).toBe(EMAIL);
  });

  test('deve jogar um BadRequestException quando o email undefined', () => {
    const novoUsuario = new NovoUsuarioDto(undefined, SENHA);
    const res = controller.adicionaNovoUsuario(
      novoUsuario,
    ) as BadRequestException;
    expect(res.getStatus()).toBe(400);
  });

  test('deve jogar um BadRequestException quando o email null', () => {
    const novoUsuario = new NovoUsuarioDto(null, SENHA);
    const res = controller.adicionaNovoUsuario(
      novoUsuario,
    ) as BadRequestException;
    expect(res.getStatus()).toBe(400);
  });

  test('deve jogar um BadRequestException quando o email vazio', () => {
    const novoUsuario = new NovoUsuarioDto('', SENHA);
    const res = controller.adicionaNovoUsuario(
      novoUsuario,
    ) as BadRequestException;
    expect(res.getStatus()).toBe(400);
  });

  test('deve jogar um BadRequestException quando o email inválido', () => {
    const novoUsuario = new NovoUsuarioDto(EMAIL_INVALIDO, SENHA);
    const res = controller.adicionaNovoUsuario(
      novoUsuario,
    ) as BadRequestException;
    expect(res.getStatus()).toBe(400);
  });

  test('deve jogar um BadRequestException quando o senha undefined', () => {
    const novoUsuario = new NovoUsuarioDto(EMAIL, undefined);
    const res = controller.adicionaNovoUsuario(
      novoUsuario,
    ) as BadRequestException;
    expect(res.getStatus()).toBe(400);
  });

  test('deve jogar um BadRequestException quando o senha null', () => {
    const novoUsuario = new NovoUsuarioDto(EMAIL, null);
    const res = controller.adicionaNovoUsuario(
      novoUsuario,
    ) as BadRequestException;
    expect(res.getStatus()).toBe(400);
  });

  test('deve jogar um BadRequestException quando o senha vazio', () => {
    const novoUsuario = new NovoUsuarioDto(EMAIL, '');
    const res = controller.adicionaNovoUsuario(
      novoUsuario,
    ) as BadRequestException;
    expect(res.getStatus()).toBe(400);
  });
});
