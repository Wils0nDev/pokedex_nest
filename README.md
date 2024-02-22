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
## Stack usado
* MongoDB
* NestJS
* Postman
* Docker Desktop

## Temas


1. Validaciones : Uso de class-validator y class-transformer
2. CRUD contra base de datos : (GET, POST, PATCH, DELETE)
3. Docker y Docker Compose : Para levantar bd MongoDB
4. Schemas : Usando la libería de moongose
5. Modelos 
6. DTOs y sus extensiones
8. Custom Pipes : Creamos un pipe para validar que el id sea un MongoID
9. Seed : Para generar data de prueba mediante un provider
10. Inyección de provider : Inyectamos nuestro modelo Pokemon en SeedService para poder hacer uso de sus métodos.
12. Importación de Módulo :  exportamos nuestro MongooseModule para poder hacer uso de los modelos.
11. Exportación de Módulo :  exportamos nuestro MongooseModule para poder hacer uso de los modelos.
13. Insercción de multiples registros
14. Patron Adapter : Implementamos nuestro patrón adapter para las peticiones http con Axios
15. Paginación : 
7. Respaldar a Github

## Puntos para recordar

- setGlobalPrefix : permite definir un prefijo global con la que iinciara la ruta del endpoint
  - En el maint.ts: 

    ``` app.setGlobalPrefix('api/v2') ```
