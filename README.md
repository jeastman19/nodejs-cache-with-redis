<img src="./images//Redis_Logo.png">

# Caché con Redis

## ¿Qué es Redis?

[Según widikepedia](https://es.wikipedia.org/wiki/Redis)

> Redis es un motor de base de datos en memoria, basado en el almacenamiento en tablas de hashes (clave/valor) pero que opcionalmente puede ser usada como una base de datos durable o persistente. Está escrito en ANSI C por Salvatore Sanfilippo, quien es patrocinado por Redis Labs. Está liberado bajo licencia BSD por lo que es considerado software de código abierto.

## Usos

Existen varios usos que generalmente se le dan a esta base de datos, algunos ejemplos pueden ser:

-   Caché de datos: Para almacenar datos en memoria y así reducir los tiempos de respuesta de las aplicaciones cuando estas requieren obtener datos desde una base de datos o servicio externo.

-   Cola de mensajes: permite a las aplicaciones colocar mensajes que luego pueden ser leídos por otras aplicaciones.

-   Base de datos de sesiones: permite a las aplicaciones almacenar datos de sesión de los usuarios, de gran utilidad en aquellos casos que puede existir más de una instancia de la aplicación corriendo, de esta manera no importa con cual instancia se inició la sesión ni cual instancia requiere verificar el estado de la sesión.

# ¿Qué es este proyecto?

Este proyecto es un ejemplo muy simple de cómo utilizar Redis para almacenar los resultados de una consulta a base de datos o la información generada por la aplicación con el fin de reducir los tiempos de respuesta.

# ¿Cómo funciona?

Este ejemplo está dividido en tres partes, el código para cada uno es el mismo, la diferencia es: en el primero de los ejemplos no tenemos caché, en el segundo el caché está implementado a nivel de repositorio y en el tercer ejemplo el caché está implementado a nivel de endpoint.

1. **Consultas sen caché**: este ejemplo no tiene caché, por lo que cada vez que se realiza una consulta a la base de datos se obtienen los datos de la base de datos y los tiempos de respuesta dependeran de elementos como la carga de trabajo, el tráfico en la red, la velocidad de la conexión y otros.

2. **Consulta con caché en repositorio**: en este caso, el repositorio consulta en primera instancia si los datos están la caché, de ser así, los retorno, en caso contrario, se consulta la base de datos, se almacena en caché el resultado y se retorna al cliente, esto mejora el rendimiento en las siguientes consultas, que obtendrá los datos desde la caché y no desde la DB.

3. **Consulta con caché en endpoint**: este módulo muestra un uso diferente de Redis como caché, en este caso, el endpoint consulta en primera instancia si los datos están la caché, de ser así, los retorno, en caso contrario, se consulta la base de datos, se almacena en caché el resultado y se retorna al cliente, esto mejora el rendimiento en las siguientes consultas, que obtendrá los datos desde la caché y no desde la DB, evitando todo el flujo, especialmente útil cuando los datos obtenidos de la DB son procesados por la aplicación antes de ser retornados.

# Uso

## Clonar el proyecto

Para clonar el proyecto, ejecutar el siguiente comando:

```bash
git clone git@github.com:jeastman19/nodejs-chace-with-redis.git
```

## Instalar dependencias

Para instalar las dependencias, ejecutar el siguiente comando:

```bash
npm install
```

## Configurar Redis

Si no tienes una instancia de Redis, puedes instanciarla con Docker utilizando el archivo **_docker-compose.yaml_** que se encuentra en la raíz del proyecto, para ello, ejecutar el siguiente comando:

```bash
docker-compose up -d
```

El proyecto se conecta por defecto a una instancia local de Redis, con lo cual no se requiere de modificaciones, es solo un ejemplo, en producción se recomienda utilizar una instancia de Redis en la nube y variables de entorno para establecer los parámetros de conexión.

## Ejecutar el proyecto

Para ejecutar el proyecto, ejecutar el siguiente comando:

```bash
npm run dev
```

## Probar el proyecto

Los endpoints que se pueden probar son:

## Origen de los datos

[{JSON} Placeholder](https://jsonplaceholder.typicode.com/)
