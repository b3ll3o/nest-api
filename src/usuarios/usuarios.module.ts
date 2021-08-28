import { Module, DynamicModule } from '@nestjs/common';
import { UsuariosService } from './application/services/usuarios.service';
import { UsuariosController } from './controllers/usuarios.controller';
import { UsuariosServiceMock } from './tests/mocks/usuarios-service.mock';

const connectionFactory = (padrao = true) => ({
  provide: UsuariosService,
  useFactory: () => {
    return padrao ? new UsuariosService() : new UsuariosServiceMock();
  },
});

@Module({})
export class UsuariosModule {
  static register(padrao = true): DynamicModule {
    return {
      module: UsuariosModule,
      providers: [connectionFactory(padrao)],
      exports: [UsuariosService],
      controllers: [UsuariosController],
    };
  }
}
