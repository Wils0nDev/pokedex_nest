import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v2')
  const configService = app.get(ConfigService)
  const port :number = configService.get<number>('port')
  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,       //*Estas dos propiedades convierte mi queryParams a Json con el tipo de los Dtos 
    transformOptions: {
      enableImplicitConversion:true
    }
    })
   );
  await app.listen(process.env.PORT);
}
bootstrap();
