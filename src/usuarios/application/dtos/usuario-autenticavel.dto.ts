import { UsuarioCadastradoDto } from "./usuario-cadastrado.dto";

export class UsuarioAutenticavelDto extends UsuarioCadastradoDto {
  senha: string
  constructor(id: number, email: string, senha: string){
    super(id, email)
    this.senha = senha
  }
}