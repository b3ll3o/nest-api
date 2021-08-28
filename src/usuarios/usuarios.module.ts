import { Module, DynamicModule } from '@nestjs/common';
import { UsuariosApplicationService } from './application/services/usuarios-application.service';
import { UsuariosController } from './controllers/usuarios.controller';
import { UsuariosServiceMock } from './tests/mocks/usuarios-service.mock';

const connectionFactory = (padrao = true) => ({
  provide: UsuariosApplicationService,
  useFactory: () => {
    return padrao ? new UsuariosApplicationService() : new UsuariosServiceMock();
  },
});

@Module({})
export class UsuariosModule {
  static register(padrao = true): DynamicModule {
    return {
      module: UsuariosModule,
      providers: [connectionFactory(padrao)],
      exports: [UsuariosApplicationService],
      controllers: [UsuariosController],
    };
  }
}
