# TiendaGenerica-FullStack

## Pre-requisitos
- docker cli, verifcar con los commandos:
```Shell
docker -v
docker-compose -v
```

## Ejecutar el proyecto
La versión full corre un total de 16 contenedores.Ejecutar por línea de comandos:
```Shell
git clone --recurse-submodules https://github.com/s-f-c-m/TiendaGenerica-FullStack
cd TiendaGenerica-FullStack
docker-compose up --bulid -d
```
Para ejecutar una versión reducida con 8 (solo ciudad Bogotá y un módulo de Cali (clientes)), ejecutar
```Shell
git clone --recurse-submodules https://github.com/s-f-c-m/TiendaGenerica-FullStack
cd TiendaGenerica-FullStack
docker-compose -f docker-compose-min.yml up --build -d
docker-compose -f docker-compose-min.yml up -d
```
* Si se genera un error indicando que la imagen no ha sido encontrada y se require login (o similar), ejecutar docker-compose build y up por separado:
```Shell
docker-compose build
docker-compose up -d
```
## Características
- la aplicación corre en http://localhost
- mongo express en http://localhost:8081 para validar la DB
- usuario inicial de prueba: {usuario: user, contraseña: casa123} (Esto usuario se crea a primera vez que se crea el contenedor de mongodb)
- Las apis se encuentran protegidas con jwt, si se desea probarlas independientemente (mediante Postman u otro cliente), se debe primero generar un token válido mediante la api de login y agregarlo como Authentication header. (El token también puede obtenerse iniciando sesión vía web y copiando el contenido de la cookie tg_session)
