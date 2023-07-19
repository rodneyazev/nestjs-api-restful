import { Module } from "@nestjs/common";
import { UsuarioController } from "./Usuario.Controller";
import { UsuarioRepository } from "./Usuario.Repository";
import { EmailUnicoValidator } from "./validacao/Email.Unico.Validator";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository, EmailUnicoValidator]
})
export class UsuarioModule {}