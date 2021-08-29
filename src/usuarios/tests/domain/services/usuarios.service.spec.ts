import { UsuariosService } from "../../../../usuarios/domain/services/usuarios.service"

const usuariosServiceFactory = () => new UsuariosService()


describe('UsuariosService', () => {
  
  test('deve criar um UsuariosService', () => {
    expect(usuariosServiceFactory()).toBeDefined()
  })
})