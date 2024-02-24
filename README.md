<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Instalacion

```bash
$ npm install
```

## Ejecutar en desarrollo
1. Clonar al repositorio
2. Levantar la base de datos
```
docker-compose up -d
```
3. Reconstruir la base de datos con la semilla
``` http://localhost:3000/api/v2/seed/ ``` 
4. Levantar la aplicacion en diferentes modos
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Librerias

- class-transformer , class-validator : Para validar nuestros DTOs.
- @nestjs/config  : Para poder configurar variables de entorno
- @nestjs/mongoose, mongoose : Para trabajar con BD MongoDB
- axios : Para hacer peticiones http a nuesto Api de Pokemon
- joi :   Nos ayudara a validar nuestros variables de entorno (.env)



## Stack usado
* MongoDB
* NestJS
* Postman
* Docker Desktop

## Build de Producción

1. Crear el archivo .env.prod
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen
```docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build ```

## Temas
1. Validaciones : Uso de class-validator y class-transformer.
2. CRUD contra base de datos : (GET, POST, PATCH, DELETE).
3. Docker y Docker Compose : Para levantar bd MongoDB.
4. Schemas : Usando la libería de moongose.
5. Modelos .
6. DTOs y sus extensiones.
7. Custom Pipes : Creamos un pipe para validar que el id sea un MongoID.
8. Seed : Para generar data de prueba mediante un provider.
9. Inyección de provider : Inyectamos nuestro modelo Pokemon en SeedService para poder hacer uso de sus métodos.
10. Importación de Módulo :  exportamos nuestro MongooseModule para poder hacer uso de los modelos.
11. Exportación de Módulo :  exportamos nuestro MongooseModule para poder hacer uso de los modelos.
12. Insercción de multiples registros.
13. Patron Adapter : Implementamos nuestro patrón adapter para las peticiones http con Axios.
14. Paginación : Uso de QueryParams y PaginationDto, y los metodos limit y skyp.
15. transform,transformOptions,enableImplicitConversion : propiedades ValidationPipe para transformar los querysParams que vienen en string a json y darle el tipo de Dto que le corresponde.

16. ConfigModule : Es un módulo que importamos en el app.module, este nos permite obtener las variables de entorno configuradas en en nuestro env.config, que a su vez obtiene las variables configuradas en el .env. 
    * load : es una propiedad de ConfigModule, que nos permite cargar nuestra configuración de variables de entorno (EnvConfiguration)

17. ValidationSechema : con la librería "joi" podemos validar nuestros schema, pero en este caso lo usaremos para hacer una validación de nuestas variables de entorno. validationSchema es una propiedad mas de ConfigModule, el cual nos permite hacer uso de schemas para hacer la validación. 

18. Docker: Docker nos sirve para crear contenedores con todo lo necesario que nuestra aplicación necesita para ser instalado en un servidor

19. Respaldar a Github

## Puntos para recordar

- setGlobalPrefix : permite definir un prefijo global con la que iinciara la ruta del endpoint
  - En el maint.ts: 

    ``` app.setGlobalPrefix('api/v2') ```
