import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { AuthModule } from '../../auth/auth.module';
import { UsuarioService } from '../services/usuario.services';
import { UsuarioController } from '../controllers/usuario.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), forwardRef(() => AuthModule),], 
  providers: [UsuarioService],
  controllers: [UsuarioController],
  exports: [UsuarioService],
})
export class UsuarioModule {}