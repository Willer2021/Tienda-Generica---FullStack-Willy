# TiendaGenerica-FullStack

## Pre-requisitos
- docker cli, verifcar con los commandos:
```Shell
docker -v
docker-compose -v
```

## Ejecutar el proyecto
Ejecutar por línea de comandos:
La versión full corre un total de 16 contenedores:
```Shell
git clone --recurse-submodules https://github.com/s-f-c-m/TiendaGenerica-FullStack
cd TiendaGenerica-FullStack
docker-compose build
docker-compose up -d
```
Para ejecutar una versión reducida con 8 (solo ciudad Bogotá y un módulo de Cali (clientes)), ejecutar
```Shell
docker-compose -f docker-compose-min.yml buil
docker-compose -f docker-compose-min.yml up -d
```
## Características
- la aplicación corre en http://localhost
- mongo express en http://localhost:8081 para validar la DB
- usuario inicial de prueba: {usuario: user, contraseña: casa123} (Esto usuario se crea a primera vez que se crea el contenodor de mongo db)
