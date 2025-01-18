el proyecto va ser crear una tienda online con express q es un mini framework q corre en nodejs,
nuestro proyecto tiene todas las caracteristicas de una tienda online: products,categorias,orden de compras
la tarea q va a ir en node es levantar un entorno de desarrollo

# Subir a produccion

## Recomendaciones

- Cors
- Https
- Procesos de Build
- Remover logs
- Seguridad (Helmet)
- Testing

Evaluar los CORS:
a quienes les damos acceso para atender solicitudes

Que nuestra API este sobre un servidor que sea https
por que esta cifrado, en cambio en http cualquiera podria tener acceso a nuestra informacion de una manera sencilla

Tener procesos de BUILD
esto tiene más que ver con cosas que tienen que procesar una informacion, por ejemplo typescript que tiene que pasarse a javascript o sass... si tienes algun proceso de building deberias trabajarlo y verificar que funcione bien antes de ponerlo a trabajar en produccion

Remover Logs
No es bueno tener logs, no es bueno tener logs en produccion, incluso esto aveces puede hacer demorar la aplicacion, se puede utilizar sarcentry o datalog para capturar todo esto en produccion

Seguridad
Es importantisimo trabajar la seguridad desde el principio, Helmet es una colleccion de middlewares que ya ponen algunas capas de seguridad a tu aplicacion de Node

Testing: Pruebas Unitarias
tenemos que hacer pruebas unitarias o pruebas de integracion antes de subir nuestra aplicacion
