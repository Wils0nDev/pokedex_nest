import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';

import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './common/config/env.config';
import { JoiValidationSchema } from './common/config/joi.validation';

@Module({
  imports: [
    //* ConfigModule : Para poder hacer uso de nuestras variables de entorno
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema //*Esto nos permite validar nuestras variables mendiante el esquema creado por "joi"
    }),
    ServeStaticModule.forRoot({
    rootPath: join(__dirname,'..','public'),
    }),
    MongooseModule.forRoot(process.env.MONGO_URL,{
      dbName: 'pokemondb'
    }),
    PokemonModule,
    CommonModule,
    SeedModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
