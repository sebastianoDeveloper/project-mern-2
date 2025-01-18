Qué es Express?
es el framework web más popular de Node, y es la librería subyacente para un gran número de otros frameworks web de Node populares. Proporciona mecanismos para:
expressjs.com/en/resources/frameworks.html

- Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).
- Integración con motores de renderización de "vistas" para generar respuestas mediante la introducción de datos en plantillas.
- Establecer ajustes de aplicaciones web como qué puerto usar para conectar, y la localización de las plantillas que se utilizan para renderizar la respuesta.
- Añadir procesamiento de peticiones "middleware" adicional en cualquier punto dentro de la tubería de manejo de la petición.

2
https://github.com/lucianocavallo/free-market-api-rest
2
Express.js, o simplemente Express, es un framework de aplicación web de back-end para Node.js, lanzado como software gratuito y de código abierto bajo la licencia MIT. Está diseñado para crear aplicaciones web y API. Se le ha llamado el framework de servidor estándar de facto para Node.js.
2
Express.js es un marco de servidor de aplicaciones web en Node.js que permite estructurar una aplicación de manera ágil y nos proporciona funcionalidades como el enrutamiento, opciones para gestionar sesiones y cookies, etc.
2
Resumen del curso Objetivo del curso: desarrollar tienda online

- Órdenes de compra
- Productos
- Categorías

Herramientas a usar

- Express: un framework que corre en node.js

Haremos todo el proceso para desarrollar la API:

- Controladores y rutas
- Conexión a base de datos
- Testing
- Autentificación

2
Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.
2
Express.js es un marco de aplicación web para Node.js que simplifica y agiliza el desarrollo de aplicaciones web y API. Es minimalista y flexible, proporcionando un conjunto robusto de funciones para la creación de servidores web y la gestión de rutas. Con Express, los desarrolladores pueden construir de manera eficiente aplicaciones web escalables y robustas, aprovechando middleware y rutas para manejar solicitudes HTTP y definir la lógica de la aplicación. Express es ampliamente utilizado en el ecosistema Node.js y es conocido por su facilidad de uso y su capacidad para integrarse con diversas bibliotecas y herramientas, convirtiéndolo en una opción popular para el desarrollo de aplicaciones web y servicios backend.
2
por fin un curso practico orientado a Ecommerce
2
Express.js es un marco de aplicación web para Node.js que simplifica y agiliza el desarrollo de aplicaciones web y API. Es minimalista y flexible, proporcionando un conjunto robusto de funciones para la creación de servidores web y la gestión de rutas. Con Express, los desarrolladores pueden construir de manera eficiente aplicaciones web escalables y robustas, aprovechando middleware y rutas para manejar solicitudes HTTP y definir la lógica de la aplicación. Express es ampliamente utilizado en el ecosistema Node.js y es conocido por su facilidad de uso y su capacidad para integrarse con diversas bibliotecas y herramientas, convirtiéndolo en una opción popular para el desarrollo de aplicaciones web y servicios backend.
2
Personalmente me gusta saber para que instalo cada cosa. En este caso estamos instalando los módulos eslint y prettier que nos ayudarán a escribir un código acorde con buenas prácticas. Todo bien hasta allí. La preguntas es: además de instalar esos paquetes mediante npm ¿es realmente necesario agregar las extensiones mediante Visual Studio? ¿no es suficiente con los paquetes npm? ¿O de qué me pierdo si solo instalo los paquetes npm y no los plugins?
2
https://www.youtube.com/watch?v=ORUFii_Qsyg
2
Ya habia visto este curso anteriormente, lo estoy revisitando para volver a repasar lo que se vio en este curso.

Visto desde el punto de vista acutal con un poco mas de entendimiento y conocimientos, creo que al crear el entorno de desarrollo instalando linters o cualquier otra cosa, creo que es importante dar a entender un poco mas para que se usa, cuando usarlo, que otras opciones hay etc.

P.D. El curso se bueno, el profesor es bueno, aprendi mucho en este curso, simplemente digo que no se deberia nunca codear algo en un curso y no explicar todo lo que comente, esto aplica para cualquier libreria o configuracion
2
Aún no me queda claro la diferencia e importancia de crear un entorno de desarrollo y otro de producción si ambos se ejecutan desde el mismo archivo de servidor.

¿Es como un ambiente virtual o cómo?
22
En el entorno de desarrollo se programa el software. Puede haber diferentes opciones: el propio ordenador del desarrollador, un servidor compartido por los desarrolladores para que creen la aplicación. en el que el sistema puede ser instalado o montado fisicamente, virtual o a través de contenedores. Este entorno debe parecerse lo máximo posible al entorno de producción, por no decir que debe ser igual.

Entorno de producción

Este entorno ya es accesible a todo el mundo. Si hemos configurado todos nuestros entornos de la misma manera, realizado pruebas exhaustivas del software, tests automatizados y seguido buenas prácticas, no deberíamos tener ningún problema en el despliegue. Y si lo tuviéramos, simplemente tendríamos que comenzar de nuevo el ciclo de desarrollo: código, pruebas y despliegue.

Quizás te parezca absurdo contar con dos entornos que deben o que pretenden ser iguales pero en la práctica no es tan sencillo como clonar un disco duro. Es decir, que tu aplicacion funcione en producción a que funcione en tu computador es muy diferente. ¿No has escuchado el clásico argumento que dice: Profe! es que en mi computadora la pagina web del proyecto que hice si funciona pero en el servidor no! seguro el servidor no le sirve el windows!

Ah pues eso, faltó la implementación de los distintos entornos de trabajo.

Saludos
2
Que es ESLint?

ESLint es una herramienta de código abierto que se utiliza para identificar y reportar patrones problemáticos o erróneos en el código JavaScript. Proporciona una manera de mantener un código JavaScript limpio y coherente dentro de un proyecto o equipo de desarrollo.

Characteristics principales

Análisis estático del código JavaScript.
Configuración personalizable.
Integración con editores de código.
Compatibilidad con ECMAScript.
Amplia comunidad y soporte.
Integración con sistemas de control de versiones.
Integración con flujos de trabajo CI/CD.
2
¿Que es editorconfig?

EditorConfig for VS Code es una extensión que permite mantener la consistencia en el estilo de codificación en un equipo de desarrollo de software a través de diferentes editores de texto y entornos de desarrollo, con un enfoque particular en Visual Studio Code.

Characteristics principales

Estándares de formato
Configuración personalizable.
Consistencia entre equipos
Soporte multiplataforma.
Integración transparente.
2
Uno de mis problemas con muchos cursos de platzi, y que me di cuenta cuando empecé a tomar cursos externos, es que no se centran en el tema y confunden a la gente más novata con configuraciones extra que no quedan claras para que son. Hay buenas prácticas que son buena idea ponerlas en práctica pero si lo mezclan con cursos sin hacer una aclaración de que necesitan saber antes es muy problematico
2
El error menciona que el puerto 3000 ya esta siendo usado para poder comprobarlo podrías abrir otra terminal y ejecutar: netstat -ano | findstr :3000 si te muestra información puedes cambiar el puerto y terminar con el proceso que usa dicho puerto y probar.
2
var expressGalery = require("express");
var aplicacion = expressGalery();
var path = require('path');

aplicacion.use(expressGalery.static(path.join(\_\_dirname, '../reto del curso - flexnet/')));

aplicacion.get('/', (peticion, respuesta) => {
respuesta.sendFile(path.resolve(\_\_dirname, '../reto del curso - flexnet/Index.html'))
})

aplicacion.get('/login', (peticion, respuesta) => {
respuesta.sendFile(path.resolve(\_\_dirname, '../reto del curso - flexnet/Login/Index.html'))
})

aplicacion.get('/registro', (peticion, respuesta) => {
respuesta.sendFile(path.resolve(\_\_dirname, '../reto del curso - flexnet/Login/Registro.html'))
})
let puerto = 9080;

aplicacion.listen(puerto, () => {
console.log('aplicacion corriendo en el puerto: ' + puerto)
});
22
Hola 👋 Bueno tu aporte pero me gustaría darte unas observaciones:

Cuida el orden de tus definiciones, es decir:
Liberías
Archivos o módulos
Constantes
Funciones o módulos y en ellas definimos constantes o variables
Evita el uso de var, su uso en backend es una mala práctica; en frontend conlleva a mal funcionamiento o definiciones de scope
Cuando importes una librería o módulo, procura definirla como la se llama.
Divide tu código en 2 archivos, un index.js y server.js permitiendo descentralizar tu definición.
Cuida la definición de rutas porque el orden afectará su renderizado.
Asigna mediante express las variables globales de tu servidor, no de entorno
. Al final te comparto tu definición:

// server.js
const express = require("express");
const { join } = require("path");

const server = express()

server.set('port', 3000)

server.use('/', express.static(join(\_\_dirname, 'views')))
server.use('/api', index)

server.get('/\*', function (\_, res) {
res.sendFile(join(\_\_dirname, 'views', 'index.html'))
})
module.exports = server
// index.js
const server = require("server");

server.listen(server.get('port'), () => {
console.log('aplicacion corriendo en el puerto: ' + puerto)
});
2
Siento que no se esta explicando correctamente y solo se esta escribiendo codigo y describiendo lo que se hace a medias
2
algien dijo:req y res
req es un objeto que contiene información sobre la solicitud HTTP que provocó el evento. En respuesta areq, usa respara devolver la respuesta HTTP deseada.
22
REQuest >> peticion RESponse >> respuesta

¿q significa?
2
el routing se refiere a determinar cómo una aplicación responde a una solicitud de cliente a un punto final en particular) y un método de solicitud HTTP específico.

La definición de la ruta adopta la siguiente estructura:

app.METHOD(PATH, HANDLER)
app es una instancia de express.

METHOD es un método de solicitud HTTP, en minúsculas.

PATH es una ruta en el servidor.

HANDLER es la función ejecutada cuando la ruta coincide.
2
https://expressjs.com/en/guide/routing.html
Checa la documentación de Express.js relacionada con Routing y así entender qué es. cómo funciona y cómo puedes usarlo para desarrollar tus apps
2
Entonces, con node.js puedo crear aplicaciones web SSR con rutas tipo "res.sed" y single web aplicacións con "sen.json", es así?
22
Correcto, en send puedes enviar un html que ha sido generado a partir de un component en React, Vue, etc. Hay un curso sobre eso usando React.
https://platzi.com/clases/ssr/
2
Creo que te refieres a algo similar a esto, es así? https://codeforgeek.com/render-html-file-expressjs/
2
En platzi no tienen un curso donde expliquen exactamente que es un JSON. Para quienes tengan está duda le recomiendo este curso de YouTube, está muy sencillo

https://youtu.be/lLsYjzpSDyA
2
Se recomienda tener las rutas en un archivo aparte esto para poder tener dividido el código en piezas pequeñas y ser mas fácil su manejo a futuro
2
res.json() tambien puede recibir objetos como parametros

app.get('/products', (req, res) =>{
const data = [
{
"id":"1",
"name":"Guitar",
"price":"2500"
},
{
"id":"2",
"name":"Microphone",
"price":"500"
}
]
res.json(data)
})
Esto sirve si por ejemplo queremos leer un archivo json que tengamos y que llamemos con require
2
La verdad escribí tremendo manuscrito, pero le di a la opción de enlace y me borro 1 hora de trabajo, lo único que no se perdió fue el prólogo en que me apoye en ChatGPT para dar una breve y entretenida info a cerca de node :/

¡Disfrútenla viajeros!

En los albores del siglo XXI, cuando las vastas redes de información ya habían tejido su telaraña alrededor del globo, emergió un nuevo poder en el reino de la programación. Este nuevo entorno, conocido como Node.js, fue forjado por el visionario Ryan Dahl en el año 2009. Inspirado por el deseo de expandir las capacidades de JavaScript, el lenguaje que dominaba los confines de los navegadores web, Dahl buscó llevarlo más allá, a las profundidades y vastedades de los servidores y sistemas operativos.

Node.js nació del motor V8 de Google, un corazón pulsante capaz de ejecutar JavaScript a velocidades antes inimaginables. Este nuevo reino se caracterizaba por su naturaleza asincrónica y no bloqueante, donde el bucle de eventos y las promesas tejían una danza de operaciones eficientes y multitarea, permitiendo a las aplicaciones realizar múltiples tareas simultáneamente sin caer en el letargo de los procesos bloqueantes.

Con el nacimiento de npm, el gran repositorio de módulos, Node.js no solo se fortaleció, sino que también creó un vasto mercado de herramientas y librerías. Este mercado se convirtió en el caldo de cultivo para que desarrolladores de todos los confines del mundo pudieran compartir sus creaciones y soluciones, fortaleciendo así el ecosistema de Node.js.

Así, Node.js se estableció no solo como un entorno de ejecución, sino como una piedra angular en la construcción del moderno desarrollo web y de aplicaciones. Desde pequeñas aplicaciones personales hasta grandes sistemas distribuidos, Node.js ha continuado expandiendo su imperio, llevando la versátil y omnipresente lengua de JavaScript a cada rincón del reino digital.

Este prólogo busca honrar esos inicios y reconocer el papel de Node.js como un puente entre mundos, una herramienta de poder inmenso que ha transformado la forma en que construimos y operamos en el vasto reino de la tecnología.
2
y ese json lo obtendríamos de un db? es decir puedo conectar una rest api hecha con node express a una db? hay algun curso especifico para eso? Gracias por la respuesta de antemano
22
Claro, y no solo con express, casi siempre, sin importar el framework o lenguaje de programación tendrás una manejera de conectarte a una base de datos para consultar y enviar la respuesta como un JSON desde tu API.
VALE_ORO
Tienes, por ejemplo, el Curso de Backend con Node.js: Base de Datos con PostgreSQL(https://platzi.com/cursos/backend-nodejs-postgres/). También puedes conseguir algunos vídeos muy buenos en Youtube:

- Nodejs MySQL REST API, Desde cero a Despliegue en Railway (https://www.youtube.com/watch?v=3dSkc-DIM74&ab_channel=Fazt)
- Nodejs & PostgreSQL REST API(https://www.youtube.com/watch?v=7NfvC-gOcRc&ab_channel=FaztCode)
- Nodejs Mongodb CRUD (Desarrollo y Despliegue), Aplicación web desde Cero (https://www.youtube.com/watch?v=I-MhmB5B6Zk&ab_channel=FaztCode)
  2
  https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/
  2
  Aspectos básicos del routing en Express.js

La definición de ruta tiene la siguiente estructura: app.METHOD(PATH, HANDLER) Donde:

app es una instancia de express.
METHOD es un método HTTP, en minúsculas.
PATH es una ruta en el servidor.
HANDLER es la función que se ejecuta cuando la ruta coincide.

5

## RESTful API

REST: Representational State Transfer
Es una conveccion que se refiere a servicios web por protocolo HTTP

Metodos:

Get: Obtener
Put: Modificar/Actualizar
Patch: Modificar/Actualizar
Post: Crear
Delete: Eliminar
Patch
El método de solicitud HTTP PATCH aplica modificaciones parciales a un recurso.

PATCH es algo análogo al concepto de "actualización" que se encuentra en CRUD(https://developer.mozilla.org/en-US/docs/Glossary/CRUD), Una solicitud se considera un conjunto de instrucciones sobre cómo modificar un recurso. Contrasta esto con PUT; que es una representación completa de un recurso.PATCH

Mo es necesariamente idempotente, aunque puede serlo. Contrasta esto con PUT(https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT); que siempre es idempotente.

La palabra "idempotente" significa que cualquier número de solicitudes repetidas e idénticas dejará el recurso en el mismo estado.

Por ejemplo, si un campo de contador de incremento automático es una parte integral del recurso, entonces un PUT(https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT) lo sobrescribirá naturalmente (ya que sobrescribe todo), pero no necesariamente para .PATCH

PATCH (como POST(https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)) puede tener efectos secundarios sobre otros recursos.

PATCH - HTTP | MDN(https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH)
2
https://aldeahost.com.mx/todo-lo-que-necesitas-saber-sobre-el-web-service/
2
Que bien se siente cuando se nota que el profesor del curso domina realmente un tema y, por lo tanto, se le facilita transmitir la información de manera potable y digerible. 👏👏👏👏 Este curso promete!
2
API Restful.
REST: Representational State Transfer Es una convención que comúnmente se utiliza para desarrollar servicios web, que al final se comunican por el protocolo HTTP.

Este protocolo tiene varios métodos:

El método GET
PUT
PUSH (Son hermanitos)
POST
DELETE.
La convención de REST nos dice que por cada casi entidad que tengamos tendremos una ruta, un endpoint con un nombre, y también deberíamos tener un id por cada producto.

Si queremos obtener la lista de productos usaremos el método GET con la ruta de productos. Sí queremos una ruta en particular repetimos el endpoint, pero esta vez enviamos el id.

PUT, podríamos usar Replace y modificar una lista entera (mala práctica), lo ideal es usarlo con un solo producto
PATCH, podemos hacer una actualización mucho más detalladas, de que cosas quiero modificar.
POST, nos sirve para crear.
DELETE, no deberíamos eliminar en masa, es muy peligroso, ideal es eliminar uno a uno
2
https://www.youtube.com/watch?v=JD6VNRdGl98
2
REST: Representational State Transfer ⠀⠀ El diseño REST o RESTful API (Representational State Transfer) está diseñado para aprovechar los protocolos existentes.⠀⠀ ⠀⠀ Si bien REST se puede usar en casi cualquier protocolo, generalmente aprovecha HTTP cuando se usa para API web.⠀⠀ ⠀⠀⠀⠀ Esto significa que los desarrolladores no necesitan instalar bibliotecas o software adicional para aprovechar un diseño de API REST. REST API Design fue definido por el Dr. Roy Fielding en su disertación de doctorado de 2000. Destaca por su increíble capa de flexibilidad. Dado que los datos no están vinculados a métodos y recursos, REST tiene la capacidad de manejar múltiples tipos de llamadas, devolver diferentes formatos de datos e incluso cambiar estructuralmente con la implementación correcta de hipermedia.
https://www.mulesoft.com/resources/api/what-is-rest-api-design#:~:text=REST%20or%20RESTful%20API%20design,when%20used%20for%20Web%20APIs
2
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
2
Me parece interesante conocer las convenciones con los verbos http para conocer que tipo de operaciones se pueden hacer, y como realizar el consumo de las API
2
https://www.youtube.com/watch?v=pVAMOielOJQ
2
¿Qué es una RESTful API?

REST: Representational State Transfer Es una convención para crear servicios web los cuales se comunican por medio del protocolo HTTP
Métodos o verbos:

Get: Obtener
Put: Modificar/Reemplazar
Patch: Modificar/Actualizar
Post: Crear
Delete: Eliminar
2
Convención de REST API:

        /products - /products{id}

GET: replace - update/replace
PUT: replace* - update/replace
PATCH: N/A* - update
POST: Create - N/A*
DELETE: Delete* - Delete
2
https://jonmircha.com/api-rest
(VALE_ORO)
2
Para los que como yo, no sabíamos que es endpoints la palabra que tanto utiliza el profe:

Los endpoints son las URLs de un API o un backend que responden a una petición. Los mismos entrypoints tienen que calzar con un endpoint para existir. Algo debe responder para que se renderice un sitio con sentido para el visitante.
2
Acá dejo un aporte usando condicionales para validar el Id de la categoría y retorna diferente json.

app.get('/categories/:categoryId', (req, res) => {
const {categoryId} = req.params;
console.log(categoryId);
if (categoryId === 1) {
res.json({
categoryId,
name: 'Food',
products: 1000
})
}
res.json({
categoryId,
name: 'Others',
products: 2000
})
})
2
Yo imaginé el caso de consultas por diferentes criterios y asumo que la validación de los criterios es tarea del frontend. Por ejemplo, en una búsqueda de personas que pueden tener diferentes roles en un colegio, podríamos hacer búsquedas por nombre, apellido, rol(es) e identificador. Validamos en el frontend el criterio de búsqueda y hacemos al backend la petición que corresponda. Así, en el backend mis endpoints serían:

// ENDPOINTS DE BÚSQUEDA DE PERSONAS
//PARA PERSONAS (todas)
// todas, apellido, nombre, cedula, rol
app.get('/personas', (req, res) => {
res.json([
{
id: "11.111.111",
lastnames: 'Lombardi González',
Names: 'Pedro Augusto',
roles: ["estudiante"],
foto: "File",
},
{
id: "11.111.112",
lastnames: 'Lombardi Egurrola',
Names: 'Pedro Jesús',
roles: ["representante", "docente", "administrativo"],
foto: "File",
},
{
id: "11.111.113",
lastnames: 'González de Lombardi',
Names: 'Eunice Margarita',
roles: ["representante", "administrativo"],
foto: "File",
},
{
id: "11.111.114",
lastnames: 'Duarte Arambule',
Names: 'Alfonsina Rosario',
roles: ["administrativo"],
foto: "File",
},
{
id: "11.111.115",
lastnames: 'Pachuca Duarte',
Names: 'María Rosa',
roles: ["representante"],
foto: "File",
},
{
id: "11.111.116",
lastnames: 'Reyes de Molina',
Names: 'Elisa Margarita',
roles: ["docente"],
foto: "File",
},
{
id: "11.111.117",
lastnames: 'García Padrón',
Names: 'Oswaldo José',
roles: ["apoyo"],
foto: "File",
},
{
id: "11.111.118",
lastnames: 'Buitriado Paz',
Names: 'Gilberto Alejandro',
roles: ["estudiante"],
foto: "File",
},
{
id: "11.111.119",
lastnames: 'Cancino Ferrer',
Names: 'Gonzalo José',
roles: ["estudiante"],
foto: "File",
},
{
id: "11.111.120",
lastnames: 'Medina Lombardi',
Names: 'Augusto Alejandro',
roles: ["estudiante"],
foto: "File",
},
{
id: "11.111.121",
lastnames: 'Medina Lombardi',
Names: 'Isabel Josefina',
roles: ["estudiante"],
foto: "File",
},
{
id: "11.111.122",
lastnames: 'Perdomo Lombardi',
Names: 'Mario Ramón',
roles: ["representante"],
foto: "File",
}
]);
})

//PARA PERSONAS (todas por Apellido)
app.get('/personas/apellido/:lastname', (req, res) => {
const {lastname} = req.params;
res.json([
{
id: "11.111.111",
lastnames: 'Lombardi González',
Names: 'Pedro Augusto',
roles: ["estudiante"],
foto: "File",
},
{
id: "11.111.112",
lastnames: 'Lombardi Egurrola',
Names: 'Pedro Jesús',
roles: ["representante", "docente", "administrativo"],
foto: "File",
},
{
id: "11.111.113",
lastnames: 'González de Lombardi',
Names: 'Eunice Margarita',
roles: ["representante", "administrativo"],
foto: "File",
},
{
id: "11.111.120",
lastnames: 'Medina Lombardi',
Names: 'Augusto Alejandro',
roles: ["estudiante"],
foto: "File",
},
{
id: "11.111.121",
lastnames: 'Medina Lombardi',
Names: 'Isabel Josefina',
roles: ["estudiante"],
foto: "File",
},
{
id: "11.111.122",
lastnames: 'Perdomo Lombardi',
Names: 'Mario Ramón',
roles: ["representante"],
foto: "File",
}
]);
})

//PARA PERSONAS (por nombre)
app.get('/personas/nombre/:name', (req, res) => {
const {name} = req.params;
res.json([
{
id: "11.111.111",
lastnames: 'Lombardi González',
Names: 'Pedro Augusto',
roles: ["estudiante"],
foto: "File",
},
{
id: "11.111.112",
lastnames: 'Lombardi Egurrola',
Names: 'Pedro Jesús',
roles: ["representante", "docente", "administrativo"],
foto: "File",
},
]);
})

//PARA PERSONAS (por cedula)
app.get('/personas/:id', (req, res) => {
const {id} = req.params;
res.json(
{
id,
lastnames: 'Lombardi González',
Names: 'Pedro Augusto',
roles: ["estudiante"],
foto: "File",
}
);
})

//PARA PERSONAS (todas por rol o roles, en este caso representantes y administrativos)

app.get('/personas/roles/:roles', (req, res) => {
const {roles} = req.params;
res.json(["resultados para: " + roles,
{
id: "11.111.112",
lastnames: 'Lombardi Egurrola',
Names: 'Pedro Jesús',
roles: ["representante", "docente", "administrativo"],
foto: "File",
},
{
id: "11.111.113",
lastnames: 'González de Lombardi',
Names: 'Eunice Margarita',
roles: ["representante", "administrativo"],
foto: "File",
},
{
id: "11.111.115",
lastnames: 'Pachuca Duarte',
Names: 'María Rosa',
roles: ["representante"],
foto: "File",
},
{
id: "11.111.122",
lastnames: 'Perdomo García',
Names: 'Mario Ramón',
roles: ["representante"],
foto: "File",
}
]);
})
2
{
id: "11.111.120",
lastnames: 'Medina Lombardi',
Names: 'Augusto Alejandro',
roles: ["estudiante"],
foto: "File",
},
{
id: "11.111.121",
lastnames: 'Medina Lombardi',
Names: 'Isabel Josefina',
roles: ["estudiante"],
foto: "File",
},
{
id: "11.111.122",
lastnames: 'Perdomo Lombardi',
Names: 'Mario Ramón',
roles: ["representante"],
foto: "File",
}
]);
})

//PARA PERSONAS (todas por Apellido)
app.get('/personas/apellido/:lastname', (req, res) => {
const {lastname} = req.params;
res.json([
{
id: "11.111.111",
lastnames: 'Lombardi González',
Names: 'Pedro Augusto',
roles: ["estudiante"],
foto: "File",
},
{
id: "11.111.112",
lastnames: 'Lombardi Egurrola',
Names: 'Pedro Jesús',
roles: ["representante", "docente", "administrativo"],
foto: "File",
},
{
id: "11.111.113",
lastnames: 'González de Lombardi',
Names: 'Eunice Margarita',
roles: ["representante", "administrativo"],
foto: "File",
},
{
id: "11.111.120",
lastnames: 'Medina Lombardi',
Names: 'Augusto Alejandro',
roles: ["estudiante"],
foto: "File",
},
{
id: "11.111.121",
lastnames: 'Medina Lombardi',
Names: 'Isabel Josefina',
roles: ["estudiante"],
foto: "File",
},
{
id: "11.111.122",
lastnames: 'Perdomo Lombardi',
Names: 'Mario Ramón',
roles: ["representante"],
foto: "File",
}
]);
})

//PARA PERSONAS (por nombre)
app.get('/personas/nombre/:name', (req, res) => {
const {name} = req.params;
res.json([
{
id: "11.111.111",
lastnames: 'Lombardi González',
Names: 'Pedro Augusto',
roles: ["estudiante"],
foto: "File",
},
{
id: "11.111.112",
lastnames: 'Lombardi Egurrola',
Names: 'Pedro Jesús',
roles: ["representante", "docente", "administrativo"],
foto: "File",
},
]);
})

//PARA PERSONAS (por cedula)
app.get('/personas/:id', (req, res) => {
const {id} = req.params;
res.json(
{
id,
lastnames: 'Lombardi González',
Names: 'Pedro Augusto',
roles: ["estudiante"],
foto: "File",
}
);
})

//PARA PERSONAS (todas por rol o roles, en este caso representantes y administrativos)

app.get('/personas/roles/:roles', (req, res) => {
const {roles} = req.params;
res.json(["resultados para: " + roles,
{
id: "11.111.112",
lastnames: 'Lombardi Egurrola',
Names: 'Pedro Jesús',
roles: ["representante", "docente", "administrativo"],
foto: "File",
},
{
id: "11.111.113",
lastnames: 'González de Lombardi',
Names: 'Eunice Margarita',
roles: ["representante", "administrativo"],
foto: "File",
},
{
id: "11.111.115",
lastnames: 'Pachuca Duarte',
Names: 'María Rosa',
roles: ["representante"],
foto: "File",
},
{
id: "11.111.122",
lastnames: 'Perdomo García',
Names: 'Mario Ramón',
roles: ["representante"],
foto: "File",
}
]);
})
const furniture = new Category(4, "Furniture");
const random = new Category(5, "Random");

const categories = [ clothing, sports, cleaning, appliances, furniture, random ];

// Products
const products = [
new Product(0, "T-Shirt", 205, clothing),
new Product(1, "Jeans", 210, clothing),
new Product(2, "Cool Shoes", 800, clothing),
new Product(3, "Hat", 70, clothing),

    new Product(4, "Soccer Ball", 510, sports),
    new Product(5, "Tennis Racquet", 130, sports),
    new Product(6, "Boxing Gloves", 650, sports),
    new Product(7, "Bicycle", 1800, sports),

    new Product(8, "Disinfectant", 150, cleaning),
    new Product(9, "Chlorine", 120, cleaning),
    new Product(10, "Soap", 15, cleaning),
    new Product(11, "Sponge", 8, cleaning),

    new Product(12, "Microwave", 1000, appliances),
    new Product(13, "Refrigerator", 2990, appliances),
    new Product(14, "Toaster", 770, appliances),
    new Product(15, "Washing Machine", 2500, appliances),

    new Product(16, "Sofa", 890, furniture),
    new Product(17, "Bed", 900, furniture),
    new Product(18, "Table", 500, furniture),
    new Product(19, "Chair", 130, furniture),

    new Product(20, "Pensaste que era un producto cualquiera de la API, pero era yo: ¡DIO!", 710, random)

];

// ALL DATA
const DATA = {
users: [...users],
products: [...products],
categories: [...categories]
}

module.exports = DATA;
Al final toda esa información la almaceno dentro de un objeto llamado DATA el cual simplemente exporto mediante el module.exports para poder usarla en el archivo index.js; el archivo principal de nuestra api y desde el cual enviamos las respuestas. · Una vez tenemos los datos, ++establecemos los endpoints++:

/_ Initial & Global Values _/
const DATA = require("./data.js");
const express = require("express");
const app = express();
const port = 3000;

/_ HTTP Requests _/
// GET Requests
app.get("/", getMainPage);
app.get("/example-route", getExampleRoutePage);
app.listen(port, () => { console.log(`El servidor está corriendo en el puerto ${port}`); });

app.get("/users", getUsers);
app.get("/users/:userId", getUserById);

app.get("/products", getProducts);
app.get("/products/:productId", getProductById);

app.get("/categories", getCategories);
app.get("/categories/:categoryId", getCategoryById);
app.get("/categories/:categoryId/products", getProductsByCategory);
app.get("/categories/:categoryId/products/:productId", getProductByIdFromCategory);
++En el código hay 10 rutas (de las cuales 8 son endpoints):++

"/", La Página Principal.
"/example-route", Una Ruta de Ejemplo.
"/users", El Endpoint de todos los usuarios.
"/users/:userId", El Endpoint de un usuario específico (por id).
"/produtcs", El Endpoint de todos los productos.
"/produtcs/:productId", El Endpoint de un producto en específico (por id).
"/categories", El Endpoint de todas las categorías.
"/categories/:categoryId", El Endpoint de una categoría en específico (por id).
"/categories/:categoryId/products", El Endpoint de todos los productos de una categoría en específico (por id).
"/categories/:categoryId/products/:productId", El Endpoint de un producto en específico (por id) de una categoría en específico (también por id).
· Además, como se puede apreciar, no definí las funciones directamente dentro del app.get, sino que les dí nombres y las definí más abajo en mi código. Esto es más que nada para tener todo más ordenadito, je je, 👉👈. · Con los endpoints listos, ++redactamos la lógica de las respuestas++:

// ./Users
function getUsers(request, response) { response.json(DATA.users); }

// ./Products
function getProducts(request, response) { response.json(DATA.products); }

// ./Categories
function getCategories(request, response) { response.json(DATA.categories); }
Dado que en DATA es un objeto en el cual tenemos toda la información de nuestra api, simplemente regresamos como respuesta la propiedad que corresponda, ya sea users, products o categories. · Sin embargo, si nos piden un usuario, producto o categoría en concreto, primero tenemos que verificar que el id que nos proporcionen sea correcto. Para ello, simplemente revisamos dentro de nuestra DATA si hay algún usuario, producto o categoría que tenga dicho id, y en caso de que sí, enviar dicho usuario, producto o categoría como respuesta.

// ./Users/{id}
function getUserById(request, response) {
const { userId } = request.params;
let userFound = searchInDataById(userId, DATA.users);

    if (!userFound) {
    	response.send("No se encontró la información solicitada");
    } else {
    	response.json(userFound);
    }

}

// ./Products/{productId}
function getProductById(request, response) {
const { productId } = request.params;
let productFound = searchInDataById(productId, DATA.products);
if (!productFound) {
response.send("No se encontró la información solicitada");
} else {
response.json(productFound);
}
}

// ./Categories/{categoryId}
function getCategoryById(request, response) {
const { categoryId } = request.params;
let categoryFound = searchInDataById(categoryId, DATA.categories);

    if (!categoryFound) {
    	response.send("No se encontró la información solicitada");
    } else {
    	response.json(categoryFound);
    }

}
Debido a que la búsqueda es muy similar en cualquiera de los tres casos, tengo una pequeña función searchInDataById la cual busca dentro de DATA.users, DATA.products o DATA.categories (según corresponda) si hay algún usuario, producto o categoría que tenga el id pasado como parámetro. Si lo encuentra, directamente lo retorna, y si no, devuelve null.
2
Si tienen algunas dudas sobre algunos temas sobre el Desarrollo Backend, les recomiendo que pasen por este curso del profesor Facundo, Curso de Introducción al Desarrollo Backend Explica conceptos como Endpoints, servidor, flujo de desarrollo, tipos de hosting (IaaS, PaaS, SaaS) y otros temas interesantes :). Lo mejor? Dura solo una hora.
https://platzi.com/home/clases/2485-backend-nodejs/42215-get-recibir-parametros/#:~:text=Si%20tienen%20algunas,solo%20una%20hora.
2
Hola compañeros, el profesor llega a mencionar endpoints, pero no le da una explicación. Para ello recomiendo checarlo en el siguiente link . Después de leerlo más de una vez por fin logré entenderlo.
https://platzi.com/home/clases/2485-backend-nodejs/42215-get-recibir-parametros/#:~:text=Hola%20compa%C3%B1eros%2C%20el%20profesor%20llega%20a%20mencionar%20endpoints%2C%20pero%20no%20le%20da%20una%20explicaci%C3%B3n.%20Para%20ello%20recomiendo%20checarlo%20en%20el%20siguiente%20link%20.%20Despu%C3%A9s%20de%20leerlo%20m%C3%A1s%20de%20una%20vez%20por%20fin%20logr%C3%A9%20entenderlo.
2
Mi forma de hacer algunas de las rutas, espero les sirva 💚

NOTA: trabaje mis productos a mi manera, decidí crear un json aparte para ahorra lineas, este es el archivo products.json
https://github.com/Noriega402/Node-API-REST/blob/main/products.json

const express = require('express');
const data = require('./products.json');
const app = express(); //usando constante de express
const port = 3000;

// definiendo rutas
app.get('/', (request, response) => { //request = peticion response = respuesta
response.writeHead(200,{'Content-Type':'text/html'});
response.write("<h2>Login</h2>");
// response.send("Este servidor es creado con express");
console.log(request.url);
})

app.get('/home/:email/:name/:surname', (request, response) => {
const { email, name, surname } = request.params;
response.writeHead(200,{'Content-Type':'text/html'});
response.write(`<h2>Welcome ${name} ${surname}</h2>`);
response.write(`<p>Your email is <strong>${email}</strong></p>`);
})

app.get('/products', (request, response) => {
response.json(data);
})

app.get('/products/:id', (request, response) => {
const { id } = request.params;
response.json({
id,
});
})
app.get('/category/:categoryId/products/:productId', (request, response) => {
const { categoryId, productId} = request.params;
response.json({
categoryId,
productId
});
})

app.get('/shop/:id/:user/home' , (request, response) => {
const { user, id } = request.params;
response.json({
id,
user,
"cardShopping":[
{
"product":"Tomato",
"price":8.56,
"description":"Tomate maduro libra"
},
{
"product":"Bananas",
"price":1.92,
"description":"Bananas de exportacion unidad"
},
{
"product":"Leche Dos Pinos",
"price":12.45,
"description":"Litro de leche en caja"
}
]
});
})

app.listen(port, function(){
console.log(`Escuchando en: localhost:${port}/`);
});
2
cá dejo mi aporte, y creo que debo practicar mas con arrays para no olvidar los métodos de búsqueda, jejeje

const stores = [
{
id: 1,
name: {
name: 'Tienda 1',
},
products: [
{
id: 1,
item_name: 'cookies',
price: 4,
},
{
id: 2,
item_name: 'agua',
price: 23,
},
{
id: 3,
item_name: 'galletas',
price: 32,
},
],
},
{
id: 2,
name: {
name: 'Tienda 2',
},
products: [
{
id: 1,
item_name: 'soda ',
price: 43,
},
{
id: 2,
item_name: 'caramelos',
price: 53,
},
{
id: 3,
item_name: 'chocolate',
price: 43,
},
],
},
]

app.get('/', (req, res) => {
res.send('Hello from My server 🌎')
})

app.get('/stores/', (req, res) => {
res.json(stores)
})
app.get('/stores/:id/', (req, res) => {
const storeId = parseInt(req.params.id)
let resultado = stores.find((element) => element.id === storeId)
res.json([resultado])
})
app.get('/stores/:storeId/products/:productId', (req, res) => {
const storeId = parseInt(req.params.storeId)
const productId = parseInt(req.params.productId)

console.log(storeId, productId)
let arrayResult = []
stores.find((item) => {
if (item.id === storeId) {
item.products.find((item) => {
if (item.id === productId) {
arrayResult.push(item)
}
})
}
})
console.log(arrayResult)
res.json(arrayResult)
})

// endpoints for test

// localhost:3000/stores/
// localhost:3000/stores/2
// localhost:3000/stores/1/products/3
2
En mi caso cree una lista de productos, la cual se envia completa para el endpoint /product pero cuando se envia un id, se envia un producto en particular que corresponde a la posicion en el array
app.get('/products', (req, res) => {
res.json(productList);
});
app.get('/products/:productId', (req, res) => {
const {id} = req.params;
res.json({
id,
...productList[id]
});
});
2
Si alguien desea conocer la magia 🧙‍♀️ detrás de los parámetros dinámicos como "/products/:id", este es el paquete que Express utiliza para convertir cadenas como "/products/:id" en una expresión regular:"👉 https://github.com/pillarjs/path-to-regexp
2
Se me ocurrió guardar el array de objetos de categorías en una constante fuera de los endpoints y así no duplicar información:

app.get('/categories', (req, res) => {
res.json(categories);
});

app.get('/categories/:id', (req, res)=> {
const { id } = req.params;
const category = categories.find(c => c.id == id);

if(category){
res.json(category);
}else{
res.status(404).send(`category with ID ${id} not found`);
}
})
2
Aqui dejo un pequeño aporte que pueden usar como endpoints GET para su ecommerce:

const express = require('express');
const ProductsAPI = require('./Products');
const UsersAPI = require('./users');
const app = express();
const PORT = 3005;

// [GET] Products

app.get('/api/products', (req, res) => {
res.json(ProductsAPI);
});

app.get('/api/products/:productId', (req, res) => {
const { productId } = req.params;
const singleProduct = ProductsAPI.find((product) => product.id === productId);

if (singleProduct) {
res.json(singleProduct);
} else {
res.json({ message: 'Ups not found' });
}
});

app.get('/api/products/similar/:productName', (req, res) =>{
const { productName } = req.params;
const products = ProductsAPI.filter(product => product.Product.toLowerCase().includes(productName.toLowerCase())); //gets products with similar name

if(products){
res.json(products);
} else {
res.json({message: 'Umm please watch if you write well the product name...'})
}
});

// [GET] Users

app.get('/api/users', (req, res) => {
res.json(UsersAPI);
})

app.get('/api/users/:\_id', (req, res) => {
const { \_id } = req.params;
const user = UsersAPI.find(user => user.id === parseInt(\_id));

if(user) {
res.json(user)
} else {
res.json({message: 'Not found'})
}
});
app.get('/api/users/names/:userName', (req, res)=> {
const { userName } = req.params;
const users = UsersAPI.find(user => user.username.toLocaleLowerCase().includes(userName.toLocaleLowerCase()));

if(users){
res.json(users);
} else {
res.json({message: 'Not found'})
}
})

const server = app.listen(PORT, () => {
console.log('listening on port ' + server.address().port); // gets port
});

```const express = require('express');const ProductsAPI = require('./Products');const UsersAPI = require('./users');const app = express();const PORT = 3005;
// \[GET] Products
app.get('/api/products', (req, res) => {  res.json(ProductsAPI);});
app.get('/api/products/:productId', (req, res) => {  const { productId } = req.params;  const singleProduct = ProductsAPI.find((product) => product.id === productId);
  if (singleProduct) {    res.json(singleProduct);  } else {    res.json({ message: 'Ups not found' });  }});
app.get('/api/products/similar/:productName', (req, res) =>{  const { productName } = req.params;  const products = ProductsAPI.filter(product => product.Product.toLowerCase().includes(productName.toLowerCase())); //gets products with similar name
  if(products){    res.json(products);  } else {    res.json({message: 'Umm please watch if you write well the product name...'})  }});
// \[GET] Users
app.get('/api/users', (req, res) => {  res.json(UsersAPI);})
app.get('/api/users/:\_id', (req, res) => {  const { \_id } = req.params;  const user = UsersAPI.find(user => user.id === parseInt(\_id));
  if(user) {    res.json(user)  } else {    res.json({message: 'Not found'})  }});
app.get('/api/users/names/:userName', (req, res)=> {  const { userName } = req.params;  const users = UsersAPI.find(user => user.username.toLocaleLowerCase().includes(userName.toLocaleLowerCase()));
  if(users){    res.json(users);  } else {    res.json({message: 'Not found'})  }})

const server = app.listen(PORT, () => {  console.log('listening on port ' + server.address().port); // gets port});
2
El método GET es uno de los métodos HTTP estándar utilizado para solicitar datos de un recurso específico en un servidor. En el contexto de Express.js*, el método* GET se utiliza para manejar las solicitudes HTTP** GET enviadas desde el cliente al servidor.

El método GET se utiliza para solicitar recursos y datos específicos del servidor.

En Express.js*, se pueden definir rutas* GET utilizando el método app.get().

El método app.get() toma dos argumentos: el primero es la ruta URL que se está escuchando y el segundo es la función de controlador que se ejecutará cuando se reciba una solicitud GET en esa ruta.

Por ejemplo, app.get('/users', function(req, res) { ... }) define una ruta GET en Express.js que escucha las solicitudes GET en la ruta /users*.*

La función de controlador proporcionada se ejecutará cada vez que se realice una solicitud GET a esa ruta. Dentro de esta función, se puede manejar la lógica de respuesta para la solicitud, como la obtención de datos de la base de datos y el envío de una respuesta al cliente.

En Express.js*, la información de la solicitud* GET se puede acceder a través del objeto req** (solicitud) que se pasa como argumento a la función de controlador. Es posible acceder a los parámetros de la solicitud, como los parámetros de consulta (req.query), los parámetros de ruta (req.params) y el cuerpo de la solicitud (req.body).

Para enviar una respuesta al cliente, se puede utilizar el objeto res** (respuesta) que también se pasa como argumento a la función de controlador. Lo que permite usar métodos como res.send(), res.json(), res.render() y otros para enviar diferentes tipos de respuestas al cliente, como texto plano, JSON*, renderizado de plantillas, etc.*
2
Estoy intentando crear una estructura para los endpoints y para las respuestas de forma tal que pueda suministrar mucha mas informacion , en este caso agregue en el endpoint de buscar producto, un caso en el que coloquen un id que no este en la lista, retornando un result de error y un mensaje con una descripcion. De igual forma para los casos positivos envia un mensaje de success y luego un data con la informacion, puede ser un poco mas trabajosa de elaborar pero creo que es un buen orden y una buena practica. Estoy abierto a cualquier consejo que quieran dar, saludos!const productList = [  {    id:1,    name:'Producto 1'  },  {    id:2,    name:'Producto 2'  },  {    id:3,    name:'Producto 3'  },]; app.get('/', (req, res)=>{  res.send('Hola desde express');});app.get('/api/v1/products', (req, res)=>{  res.json({    result: 'success',    data: productList  });}); app.get('/api/v1/products/:id', (req,res) =>{  const {id} = req.params; //capturar el parametro del url  const product = productList.find((p) => p.id == id );//buscar en la lista de productos el  if(product){    res.json({      result: 'success',      data: product    });  }else{    res.json({      result: 'error',      data: "No se encontro el producto"    })  }});


const productList = [
  {
    id:1,
    name:'Producto 1'
  },
  {
    id:2,
    name:'Producto 2'
  },
  {
    id:3,
    name:'Producto 3'
  },
];

app.get('/', (req, res)=>{
  res.send('Hola desde express');
});
app.get('/api/v1/products', (req, res)=>{
  res.json({
    result: 'success',
    data: productList
  });
});

app.get('/api/v1/products/:id', (req,res) =>{
  const {id} = req.params; //capturar el parametro del url
  const product = productList.find((p) => p.id == id );//buscar en la lista de productos el
  if(product){
    res.json({
      result: 'success',
      data: product
    });
  }else{
    res.json({
      result: 'error',
      data: "No se encontro el producto"
    })
  }
});
2
```

2
Si vienen del curso de base de datos el limit y offset funciona de la siguiente manera. EJEMPLO:

SELECT \* FROM tablaUsuarios LIMIT 5 OFFSET 3;
El resultado será los 5 registros de la 'tablaUsuarios' que se encuentren luego de los 3 primeros registros.
2
app.get('/products', (req, res) => {

    const products = new Array(20).fill().map(() => ({
            productName: faker.commerce.product(),
            price: faker.commerce.price(),
            image: faker.image.imageUrl()
        })
    )

    res.status(200).json(products);

});
Creo que es un buen acercamiento a la hora de generar fake data mas legible y ~aesthetic ~~ que se dice tambien jajaja
2
"Todo lo que sea específico, debe de indicarse antes de todo lo que sea dinámico". De esta forma evitamos que las rutas se "choquen" y se ejecute un resultado inesperado a nivel de rutas en la API.
2
Por si alguno no entendio "en base 10" cuando escribe la linea 20:

La función parseInt se utiliza para convertir una cadena de texto en un número entero. Toma dos parámetros: el primer parámetro es la cadena de texto que se desea convertir, y el segundo parámetro es opcional y se utiliza para especificar la base numérica en la cual se encuentra la cadena de texto.

En este caso, el segundo parámetro, 10, se utiliza para indicar que la cadena de texto debe ser interpretada en base 10, es decir, se espera que la cadena de texto represente un número decimal. Esto se debe a que en la mayoría de los casos, los precios se expresan en base 10, utilizando dígitos del 0 al 9.

Al pasar 10 como segundo parámetro a parseInt, te aseguras de que la cadena de texto se interprete como un número decimal correctamente. Sin este segundo parámetro, parseInt podría intentar inferir la base numérica basándose en el formato de la cadena de texto, lo cual puede llevar a resultados inesperados. Es una buena práctica especificar siempre la base numérica para evitar posibles errores de interpretación.
2
Para evitar hacer el foor loop, les recomendaria hacer un mapping del array para tener un código más limpio y corto

const { limit } = req.query;

const PRODUCTS_SIZE = 50;
const products = new Array(Number(limit) ?? PRODUCTS_SIZE)
.fill({})
.map(product => ({
name: faker.commerce.productName(),
price: Number(faker.commerce.price()),
description: faker.commerce.productDescription()
}))

res.json(products);
VALE_ORO
2
Pequeño aporte. Si preguntas si buscan mas de 100 productos, de esta forma limitas la búsqueda a máximo 100. De esa manera garantizas que el servidor no sufra.

const limit= size>100? 100: size || 10;
VALE_ORO
2
sigo sin entender, esto es un GET o un POST, aqui estamos generando productos con el Faker (creando ) cuando deberíamos solo obtener.
2
No sé si esto fue agregado en versiones más recientes, pero existe otra manera de hacer lo que hicimos en esta clase:

app.get('/products', (req, res) => {

const { size } = req.query

const createProduct = () => ({
name: faker.commerce.productName(),
price: parseInt(faker.commerce.price(), 10),
image: faker.image.url()
})

const products = faker.helpers.multiple(createProduct, {count: size || 10})

res.json(products)
})
VALE_ORO
2
En esta clase ya se puso muy enredada la cosa para alguien que recién empieza en backend. Creo que la mejor metodología es concretar la API básica y luego entrar en estos detalles. Con esa API falsa, ahora no sé como se crea el contenido real. Y ya me maree con tantas funciones que se le están dando. Sería más fácil para mi que hagamos lo básico más real. Seguiré el curso a ver si en algún momento entiendo cómo crear los datos reales.
2
Manejar query params en una url y otras utilidades de req

app.get('/cualquiera', (req, res) => {
let {...params} = req.query;
let path = req.path;
let method = req.method;
let hostname = req.hostname;
let protocol = req.protocol;
let headers = req.headers;

res.json({...params, path: path, method: method, hostname: hostname, protocol: protocol, headers: headers});
})

```*app*.get('/cualquiera', (*req*, *res*) => {  let {...*params*} = *req*.*query*;  let *path* = *req*.*path*;  let *method* = *req*.*method*;  let *hostname* = *req*.*hostname*;  let *protocol* = *req*.*protocol*;  let *headers* = *req*.*headers*;
  *res*.json({...*params*, path: *path*, method: *method*, hostname: *hostname*, protocol: *protocol*, headers: *headers*});})
```

# Separación de responsabilidades con express.Router

2
https://devcode.la/tutoriales/middlewares-en-nodejs/
Amigos, acá unos conceptos que le pueden aclarar dudas.

Express.Router
Crea un controlador(handler) de rutas modulares y montables. Una instancia de Router es un sistema de enrutamiento y middleware completo, por esa razón lo podemos tomar como si fuera una mini app.

Cada modulo de nuestras rutas es una mini aplicación en la que creamos sus rutas independientes y podemos incluirle middlewares, que se ejecutarán cuando se coincida con el path.

Qué es un middleware?
Un middleware es un bloque de código que se ejecuta entre la petición que hace el usuario (request) hasta que la petición llega al servidor.

Fuente:

Middlewares en Node.js

App.use
app.use Lo que hace es montar un middleware en la ruta especificada. Por ejemplo:

var express = require('express')
var router = express.Router()

// middleware específico a este router
router.use('/', function (req, res, next) {
console.log('Hola, soy el middleware')
next() // se utiliza para que se ejecute el router.get
})
// define the home page route
router.get('/', function (req, res) {
res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
res.send('About birds')
})

module.exports = router
2
Los tan respetados principios SOLID https://profile.es/blog/principios-solid-desarrollo-software-calidad/ me he dado cuenta que el ir entendiendolos poco a poco, nos hace ser mejores desarrolladores.
22
Liskov Substitution: Por ejemplo, cuando creamos una array, en Java sería List<Integer> nums = new ArrayList<>();. ArrayList implementa List (una interfaz o padre), por lo tanto al llamar los metodos de list estaremos llamando a los metodos implementados en ArrayList. Interface segregation: Por ejemplo, una interfaz ‘Television’ no debería tener un método llamado ‘transmitirEn(Laptop)’. Dependency Inversion: Por ejemplo, en vez enviar por parámetro un objeto específico (ej: new Corporacion(Ingeniero ing) ), debemos enviar un objeto más abstracto para que nuestra funcionalidad no este conectada a un tipo específico ya que esto puede causar problemas a la hora de arreglar bugs o añadir más features.
2
Esta clase me encanto, lo dejo todo muy claro y muy bien explicado, llevaba meses preguntándome como debería yo hacer esto?! y hasta que por fin!! ahora me siento como que estoy apunto de Graduarme! jajaja
2
Me parece que primero deberían haber introducido el concepto de Middlewares antes de brindar esta clase. Creo que el orden no es correcto.
2
Single responsability principle

El principio de responsabilidad única o SRP en ingeniería de software establece que cada módulo o clase debe tener responsabilidad sobre una sola parte de la funcionalidad . para nuestro proyecto separaremos las responsabilidades por cada entidad, crearemos una nueva carpeta routes en la raíz con archivos entidad.router.js por cada entidad . estos archivos tendrán su propio router por entidad con todas sus rutas correspondientes y serán exportados cada uno como modulo, la idea es crear un enrutador aparte por cada entidad y después inyectarlo a la aplicación
2
En Django lo llamamos application_name/urls.py
2
https://expressjs.com/es/guide/routing.html les recomiendo que lean la siguiente lectura para profundizar
2
en este video se puede ver otra forma para esto, aplicando una arquitectura por capas https://platzi.com/clases/1689-nodejs-mongo-websockets/22632-conceptualmente-rutas-controladores-y-bases-de-dat/
2
Decepcionante esta clase!

# POST: método para crear

2
Middleware: ⠀⠀ El término middleware se refiere a un sistema de software que ofrece servicios y funciones comunes para las aplicaciones. En general, el middleware se encarga de las tareas de gestión de datos, servicios de aplicaciones, mensajería, autenticación y gestión de API. ⠀⠀⠀ Ayuda a los desarrolladores a diseñar aplicaciones con mayor eficiencia. Además, actúa como hilo conductor entre las aplicaciones, los datos y los usuarios.
https://www.redhat.com/es/topics/middleware/what-is-middleware
2
Por qué versionar tu API?
La razón de versionar nuestras API es para que no haya conclicto del servicio con las distintas plataformas que puedan usarlo ( Mobile nativo, IoT, Web).

Supongamos que haces un cambio de la API para mobile, simplemente le asignas un router con la v2 y dejas lo demás con la versión v1

Ejemplo

function routerApi(app) {
const router = express.Router();
router.use('/products', productsRouter);
router.use('/users', usersRouter);
router.use('/categories', categoriesRouter);
app.use('/api/v1', router)
}
Enviar datos (POST)
Para esta clase necesitaremos un API development enviroment pueden ser Insomnia o Postman.

Lo primero que debemos hacer es crear la forma en como el servidor tratará la petición de tipo POST, en este caso lo hicimos en el endpoint de products de esta manera:

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
const body = req.body;
res.json({
message: 'created',
data: body
})
})
Luego usamos insomnia y le enviamos los datos que queremos testear:

{
"name": " New Product",
"price": 1209
}
Veremos que nos aparece el json de respuesta pero solamente con el valor de message: 'created'.

Esto es porque necesitamos aplicar un midleware nativo de express.

//index.js
app.use(express.json())
2
express.json()
es un método incorporado en express para reconocer el objeto de solicitud entrante como objeto JSON. Este método se llama como middleware en su aplicación usando el código:

app.use(express.json());
https://www.it-swarm-es.com/es/javascript/que-son-express.json-y-express.urlencoded/1045862988/
2
deberían reorganizar el curso de tal forma que se expliquen primero los middlewares antes que estos otros temas.
2
duda, si se tienen versiones para rutas apis, tambien imagino que se deben de tener versiones en los archivos que ejecutan el codigo de cada enpoint imagino?

es decir supongamos que tienes la ruta

const productsRouter = require('./products.router');

app.use('/api/v1/products', productsRouter);

para tener otro endpoint con version 2 se deberia de tener otro archivo de rutas de productos no? ejemplo asi:

const productsRouterV2 = require('./productsV2.router');

app.use('/api/v2/products', productsRouterV2);

osea el versionado se deberia de manejar por rutas y por archivos en codigo? hago dicha pregunta porque si la necesidad de tener versiones de rutas va ligado a cambios en el codigo de los procesos, entonces tambien se debe de tener archivos diferentes no?
22
Hola Julio, para hacer seguimiento y versionamiento a los archivos de codigo se usa git.

El versionamiento de las API no cambia cuando modificas el codigo, cambia cuando modificas la forma en que vas a entregar la informacion, es decir si modificas las rutas, los endpoints, la estructura de de los datos, cambias de retornarn xml a json, etc. La version de una API generalmente cambia cuando el cliente se ve afectado, ahora el cliente que consume esa API tendra que cambiar su logica y adaptarse a la nueva forma en como la API entrega los datos.

Si haces cambios en la logica de tu codigo, pero que no afectan en nada a como el cliente consume la API, no es necesario camibar la version de la API.
2
El middleware express.json() es fundamental para procesar cuerpos de solicitud en formato JSON. Este middleware permite que tu aplicación Express reconozca y maneje automáticamente las solicitudes con contenido JSON. Al usarlo, los datos del cuerpo de la solicitud se parsean y se asignan a req.body, facilitando así el acceso a esos datos en tus rutas.

Por ejemplo:

const express = require('express');
const app = express();

// Usa el middleware para parsear JSON
app.use(express.json());

app.post('/productos', (req, res) => {
const nuevoProducto = req.body; // Accede a los datos JSON
res.status(201).json({ message: 'Producto creado', data: nuevoProducto });
});
Esto es esencial para trabajar con APIs RESTful, como se explicó en la clase del curso de Backend con Node.js.
2
const {id} = req.params;
const body = req.body;
// const {body, params: {id} } = req;
22
Complementando al compañéro:

params: { id }: Esta parte de la desestructuración extrae la propiedad params del objeto req, y luego extrae la propiedad id del objeto params. En Express, los parámetros de la URL se almacenan en la propiedad params, por lo que params: { id } representaría el valor del parámetro id den la URL de la solicitud.
2
o tengo una sobre el famoso MVC a lo que entiendo es una forma de estructurar el proyecto pero no entiendo muy bien si esto se aplica en este tipo de proyectos de nodejs
22
Hola 🙂 mira el modelo MVC es muy usado y también se usa para separar las responsabilidades, sin embargo, en NodeJS vamos a ver más sobre como ir logrando "Clean Architecture" o arquitectura hexagonal.
2
//Obtiene todo los productos
router.get('/',(req,res)=>{
const products =[];
const {size}= req.query;
const limit=size||10;
for (let index = 0; index < limit; index++) {
products.push({
name:faker.commerce.productName(),
price: parseInt(faker.commerce.price(),10),
image: faker.image.imageUrl()
});

}
res.json(products);
});

//Guardar producto nuevo
router.post('/', (req,res)=>{
const body = req.body;
res.json({
message: 'created',
data:body
});
});

//Actualiza producto
router.patch('/:id', (req,res)=>{
const {id}=req.params;
const body = req.body;
res.json({
message: 'Update',
data:body,
id
});
});

//Elimina producto
router.delete('/:id', (req,res)=>{
const {id}=req.params;
res.json({
message: 'Deleted',
id
});
});
2
RESUMEN:

PUT requiere enviar una representación completa del recurso que se está modificando, se debe implementar de forma idempotente y es adecuado para situaciones en las que una aplicación debe asegurarse que el estado final del recurso será idéntica a la que envía.

PATCH es adecuado para hacer modificaciones parciales, o para enviar un conjunto de instrucciones en lugar del resultado final.

DELETE no requiere de un formato en especial solo con el identificador para borrar un recurso en especifico.

# Introducción a servicios: crea tu primer servicio

2
Cual es la diferencia entre controlador y servicios? ya que los dos manejan la parte logica de una aplicacion.
22
Normalmente, los controladores son una capa que se encarga de administrar el trabajo. En el patrón usado en este curso, ese trabajo es realizado por los router.

Por otro lado, los servicios se encargan de toda la lógica de tu negocio; esto es, todos los algoritmos que hacen el trabajo de hacer las operaciones definidas (agregar un usuario, agregar un producto, buscar un producto). Esto se hace para desacoplar los componentes y si necesitas hacer cambios sea más sencillo. Puedes encontrar más información aquí:

https://www.coreycleary.me/what-is-the-difference-between-controllers-and-services-in-node-rest-apis
22
También puedes echarle un ojo a esto:

https://sodocumentation.net/node-js/topic/10785/route-controller-service-structure-for-expressjs

https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

Saludos!
2
👀 OJO: Ya que el profesor menciona mucho el tema de las convenciones a la hora de nombrar las cosas, aqui les dejo esta convención:

Las clases se nombran en singular y usando PascalCase:
Ejemplo: Persona, Producto, Categoria, o en en el caso de esta clase debería ser ProductService.
Las funciones se nombran en verbos (crear, agregar, actualizar, etc) y usando camelCase:
Ejemplo: crearProducto(), agregarCategoria(), eliminarProducto()
Tomen nota ✍️😉
2
¿Cuántas instancias deben crearse por clase en la capa de entidades o servicios? Por ej: cuantas instancias crear por la clase de ProductsService.

Depende de los requerimientos de la aplicación:

Única instancia (Patrón de diseño creacional Singleton):
Se usa una sola instancia si todas las partes de la aplicación comparten el mismo estado o tienen datos centralizados (por ejemplo, <u>un inventario global de productos</u>).
Múltiples instancias:
Se crean varias instancias si cada componente necesita manejar datos independientes o tener su propia lógica (por ejemplo, <u>carritos de compra separados para cada usuario</u>).

# Crear, editar y eliminar

2
El create quize hacerlo de la siguiente manera, y así créo un producto con las propiedades que quiero 👇... solo por seguridad 😉

create({ name, price, image }) {
const product = {
id: faker.datatype.uuid(),
name,
price,
image,
};
this.products.push(product);
return product;
}
22
Para no cambiar la estructura de los datos de entrada, también puede ser asi

create(data) {
const { name, price, image } = data;
const product = {
id: faker.datatype.uuid(),
name,
price,
image,
};
this.products.push(product);
return product;
}
2
Cual es más eficiente?

deleteProduct(id){
this.products=this.products.filter(product=>product.id!=id)
}
o (método de la clase)

deleteProduct(id){
const index = this.products.findIndex(product=>product.id===id)
this.products.splice(index, 1)
}

22
Hola, realmente tanto splice como hacer la reasignación con un filter mutan (cambian) el array, a simple viste parece que el splice solo borra ese índice y no le toca hacer una reasignación, sin embargo, el splice según la posición corre todos los elementos así creo funcionan igual con pocos datos ya cuando hay muchos datos la eficiencia es baja, pero cuando manejes muchos datos ya lo harás con una DB y no en memoria.
2
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax

https://platzi.com/home/clases/2485-backend-nodejs/41755-crear-editar-y-eliminar/url
2
En el minuto 9:35 no entiendo la linea 44 hasta la 48 del código, más especifico en

this.products[index] = { ...product, ...changes }
no entiendo cómo es que funciona, ¿Por qué pone product y luego changes?, ¿Cómo sería si en vez de usar Spread ("...") se usará el método por item? que es como

products.name,
products.price,
products.image
22
Hola, es una genial pregunta, lo que pasa es lo siguiente, si solo hiciéramos esto:

this.products[index] = changes;
En la posición dada por index estamos cambiando todo el obj sin respetar los valores anteriores entonces si changes = { price: 200 } estaríamos borrando el ID, el precio, etc. y solo dejamos { price: 200 }.

Pero haciendo esto this.products[index] = { ...product, ...changes } , estamos diciendo que cree un nuevo objeto en donde prevalezcan los datos anteriores más los cambios, entonces no borramos nada y aplicamos el cambio a la variable correcta.

Otro resumen, puede ser que hacer esto { ...product, ...changes } es una forma de funcionar dos objetos.
2
¡Hola, tú!
En clase vimos como eliminar un objeto, no obstante, he visto que en muchos lugares cuando se hace una petición DELETE en realidad lo que hace es cambiar el estado del objeto eliminado para que ya no se muestre más, pero eliminar de una base de datos alguna fila puede llegar a ser una mala practica al final del día, por lo que le hice unas modificaciones, empezando con el objeto de productos, añadiendo un campo state, si está en true, el objeto existe, pero si está en false, el objeto "no existe" en la base de datos
Por lo que dejé el código así con el DELETE, primero la estructura:

generate() {
const limit = 5;
for (let i = 0; i < limit; i++) {
this.products.push({
id: faker.datatype.uuid(),
name: faker.commerce.productName(),
price: parseInt(faker.commerce.price(), 10),
image: faker.image.imageUrl(),
state: true,
});
}
}
Y el DELETE:

delete(id) {
const index = this.products.findIndex((item) => item.id === id);
if (index === -1) return 'Product not found';
this.products.map((item) => {
if (item.id === id) {
item.state = false;
}
});
console.log(this.products);
return `${id} deleted`;
}
Tú, si lees esto, te reto a que sigas este mismo manejo de "estados" y me cuentes como dejarías los métodos find y findOne, para que solo muestre los objetos con estado true, ya como final, te invito a que cuando se dé la respuesta al cliente con el find y findOne, no muestre el campo state.
2
Para que el id no se pueda modificar en el update()

this.products[index] = {
...product,
...changes,
id: product.id
}
Así se mande un nuevo id en el body se seguirá manteniendo el id original
2
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
https://www.youtube.com/watch?v=-Jt_86kUKuk

# Async await y captura de errores

2
Sería una buena opción implementar el patrón singleton

Products Service

class ProductsService {
static \_productsServiceInstance = null;

static getInstance() {
if (ProductsService.\_productsServiceInstance === null) {
ProductsService.\_productsServiceInstance = new ProductsService();
}
return ProductsService.\_productsServiceInstance;
}
Products.router

const express = require('express');
const ProductsService = require('../services/Products.service');

const router = express.Router();

//\* GET all products
router.get('/', getAll);

//\* GET product by ID
router.get('/:id', getOne);

//! ADD new product
router.post('/', create);

//\* UPDATE partial product
router.patch('/:id', updateProduct);

//! DELETE product
router.delete('/:id', deleteProduct);

//\* Internal Functions
async function getAll(req, res) {
const productsService = await ProductsService.getInstance();
const products = await productsService.find();
res.json(products);
}

async function getOne(req, res) {
const productsService = await ProductsService.getInstance();

const { id } = req.params;
const product = await productsService.findOne(id);

res.json(product);
}
async function create(req, res) {
const productsService = await ProductsService.getInstance();

const product = await productsService.create(req.body);

res.json(product);
}

async function updateProduct(req, res) {
const productsService = await ProductsService.getInstance();

const { id } = req.params;
const data = req.body

const answer = await productsService.update(id, data);

res.json(answer);
}

async function deleteProduct(req, res) {
const productsService = await ProductsService.getInstance();

const { id } = req.params;

const answer = await productsService.delete(id);

res.json(answer);
}

module.exports = router;
22
https://www.youtube.com/watch?v=GGq6s7xhHzY
https://angular.io/guide/singleton-services
Significa que después de crear una instancia, el programa no tenga que crear otra, sino que usa la creada anteriormente. Super útil para una conexión a una base de datos (en este caso depende, no veo la razón por la cual debería persistir)
2
si la caché funciona, y el singleton está bien implementado, node seria capaz de mantener el array en memoria tal cual, aun asi se hagan cambios de codigo.... aun asi cuando el server reinicia por cambios en el codigo no sucede.. no se ernesto nose.

# ¿Qué son los Middlewares?

2
Middleware es software que permite uno o más tipos de comunicación o conectividad entre dos o más aplicaciones o componentes de aplicaciones en una red distribuida. Al facilitar la conexión de aplicaciones que no fueron diseñadas para conectarse entre sí, y al brindar funcionalidad para conectarlas de manera inteligente, el middleware agiliza el desarrollo de aplicaciones y acelera el tiempo de comercialización.
2
Casos de usos:

Funcionar como pipes, es decir, conectar unos con otros al igual que una tubería donde la salida de uno, es la entrada de información del otro.
Validar datos.
Capturar errores.
Validar permisos.
Controlar accesos.
2
¿Qué parámetros debemos recibir para tener un middleware que lea errores?
22
Hola, genial tu curiosidad, esto lo vemos en la siguiente clase, pero los middlewares de manejo de errores tienen cuatro argumentos en lugar de tres, de la siguiente manera:

app.use((err, req, res, next) => {
console.error(err.stack)
res.status(500).send('Something broke!')
})
2
Los middlewares están en medio de los requests y los responses

requests -- middlewares -- responses

Un ejemplo de middleware podría ser la función callback que recibimos de los routers de nuestra app, ya que recibe el request y el response, y podemos manejarla como lo programemos ya que está en medio de ellas.

app.get('/', (req, res) => console.log("Esta función es un middleware porque maneja tanto al request y al response"))
Los middlewares nos permiten procesar lógica, ya que cuando nos vienen los datos de un request, podemos hacer cierta lógica para presentar los datos de acuerdo a nuestra necesidad.

Podemos encadenar middlewares, es decir, que un middleware llame a otro, por ejemplo, tenemos un middleware de autenticación, que si no pasa dicha autenticación, no va a pasar al siguiente middleware, que podría ser cualquier cosa. Pero si pasa la autenticación podemos pasar al siguiente con el tercer argumento de la función middleware, el cual por convención se le llama 'next'

app.get('/', (req, res, next) => {

if(false) res.send('No pasaste el middleware, hasta acá llegó la solicitud')

else next()

})
Casos de uso:

Funcionan como pipes
Validar datos
Capturar errores
Validar permisos
Controlar accesos
Pueden seguir dos flujos dependiendo de la lógica que se implemente:

Request → Middleware → Response.
Request → Middleware Y → Middleware X→ Middleware Z → más Middlewares → Response
2
Middlewares Un middlewares en una porción de código que se ejecuta como punto intermedio entre el request y el response
2
Estructura de un middleware

function (req,res,next){
if (something){
res.send('end')
} else {
next()
}
}
Estructura con manejo de errores

function (error, req,res,next){
if (error){
res.status(500).json({error})
} else {
next()
}
}
Casos de uso

Funcionar como pipes
Validar dato
Capturar errores
Validar permisos
Controlar accesos
2
En términos más generales, un middleware es un software que actúa como intermediario entre diferentes sistemas o aplicaciones. Puede transformar datos, realizar validaciones, autorizaciones, enrutamiento y otras tareas para facilitar la comunicación entre los sistemas. En resumen, los middlewares proporcionan una capa de abstracción y funcionalidad adicional que simplifica y agiliza el desarrollo de aplicaciones.
2
Esta explicación me facilitó entender el concepto de middleware: "Un middleware es una funcion o conjunto de funciones que permiten ejecutar ciertas operaciones en cada solicitud antes de que sean manejadas por las rutas específicas de la aplicación. El middleware se coloca en el flujo de procesamiento de una solicitud HTTP para realizar ciertas operaciones antes de que la solicitud llegue a su destino final."
2
