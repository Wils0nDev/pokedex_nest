<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

repository.

## Instalacion

```bash
$ yarn install
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
$ yarn  start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
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
3. Schemas : Usando la libería de moongose.
4. Modelos .
5. DTOs y sus extensiones.
6. Custom Pipes : Creamos un pipe para validar que el id sea un MongoID.
7. Seed : Para generar data de prueba mediante un provider.
8. Inyección de provider : Inyectamos nuestro modelo Pokemon en SeedService para poder hacer uso de sus métodos.
9. Importación de Módulo :  exportamos nuestro MongooseModule para poder hacer uso de los modelos.
10. Exportación de Módulo :  exportamos nuestro MongooseModule para poder hacer uso de los modelos.
11. Insercción de multiples registros.
12. Patron Adapter : Implementamos nuestro patrón adapter para las peticiones http con Axios.
13. Paginación : Uso de QueryParams y PaginationDto, y los metodos limit y skyp.
14. transform,transformOptions,enableImplicitConversion : propiedades ValidationPipe para transformar los querysParams que vienen en string a json y darle el tipo de Dto que le corresponde.

15. ConfigModule : Es un módulo que importamos en el app.module, este nos permite obtener las variables de entorno configuradas en en nuestro env.config, que a su vez obtiene las variables configuradas en el .env. 
    * load : es una propiedad de ConfigModule, que nos permite cargar nuestra configuración de variables de entorno (EnvConfiguration)

16. ValidationSechema : con la librería "joi" podemos validar nuestros schema, pero en este caso lo usaremos para hacer una validación de nuestas variables de entorno. validationSchema es una propiedad mas de ConfigModule, el cual nos permite hacer uso de schemas para hacer la validación. 

17. Docker: Docker nos sirve para crear contenedores con todo lo necesario que nuestra aplicación necesita para ser instalado en un servidor

18. Respaldar a Github

## Puntos para recordar

- setGlobalPrefix : permite definir un prefijo global con la que iinciara la ruta del endpoint
  - En el maint.ts: 

    ``` app.setGlobalPrefix('api/v2') ```
