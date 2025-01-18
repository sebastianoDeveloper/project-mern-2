# Middleware para HttpErrors

2

Para la ejecución de middlewares en Express.js, se mencionaron algunas consideraciones importantes:

Orden de ejecución: Los middlewares de tipo error deben definirse después de las rutas. El orden en que se colocan en el código determina el flujo de ejecución.
Middlewares de error: Es esencial usar los middlewares de tipo error al final, ya que si un middleware de error no llama a next(), la ejecución se detiene.
Manejo de errores específicos: En lugar de enviar un error genérico 500, se recomienda utilizar códigos de estado adecuados (como 404 para "no encontrado" o 409 para "conflictos") según la situación.
Estas prácticas te ayudarán a gestionar mejor los errores y mejorar la experiencia de tu API.
2
Yo que vengo de otros lenguajes, veo a los Middlewares como un interceptor. En donde toma la petición http (Caso de Uso) hace algo con eso, y la procesa o descarta.

👽 Quizás este equivocado, pero lo veo así.
2
Para la ejecución de middlewares en Express.js, se mencionaron algunas consideraciones importantes:

Orden de ejecución: Los middlewares de tipo error deben definirse después de las rutas. El orden en que se colocan en el código determina el flujo de ejecución.
Middlewares de error: Es esencial usar los middlewares de tipo error al final, ya que si un middleware de error no llama a next(), la ejecución se detiene.
Manejo de errores específicos: En lugar de enviar un error genérico 500, se recomienda utilizar códigos de estado adecuados (como 404 para "no encontrado" o 409 para "conflictos") según la situación.
Estas prácticas te ayudarán a gestionar mejor los errores y mejorar la experiencia de tu API.

# Manejo de errores con Boom

2
https://hapi.dev/module/boom/api?v=9.1.4#http-4xx-errors
2
¿Qué es la lógica de negocio?
22
La lógica de negocio es la que determinan como funciona el programa, los servicios a cumplir, e independiente del modelo, que prácticamente es la gestión de la base de datos desde la aplicación, las vistas, que es la interfaz gráfica con la que interactúan los usuarios, y los controladores los cuales establecen las rutas, validaciones, seguridad e infraestructura de la aplicación. A lo que nos lleva que en la lógica negocio encontramos solo algoritmos y procesos que hacen que nuestra aplicación sea única y diferente al resto de las existentes.

# Validación de datos con Joi

https://www.npmjs.com/package/yup
2
Tengo una duda existencial, no especificamente de la clase.

En que casos se usa : la sintaxis const {error} = schema.validate(data); En lugar de solo tener const error = schema.validate(data); ?
22
Si lees la documentación de Joi encuentras que al hacer un schema.validate(data) y fallar la validación ++te devuelve un objeto++ como el siguiente:

{ value: {}, error: '"username" is required' }
El profesor está accediando al valor de la propiedad error.

const {error} = schema.validate(data);
Es lo mismo que..

const error = schema.validate(data).error;
22
Apoyando un poco mas lo que dice nuestro compañero @luissberenguer lo que hizo el profe fue hacer Destructuring, aqui un ejemplo
const user ={
id:42,
isVerified:true,
}
const {id,isVerified} = user
console.log(id);
console.log(isVerified);
2
Ahhhhh... ¿cómo le hacen para recordar para cada cosa una librería?
22
No lo hacen, en el curso con Kaufman, el lo menciona, 'no creas que me se todo de memoria, lo busque cuando prepare la clase'
22
Eso del comentario de abajo más los años de experiencia
22
además es por uso y practica, hay veces que te acordas que existe un metodo para hacer tal cosa pero no te acordas el nombre y al buscarlo lo reconoces rapido como se llama
2
Schema o DTO (Data Transfer objects), (objetos de Transferencia de datos)

Validar los datos que nos envían desde el cliente
2
Joi

Joi es la herramienta más poderosa para la validación de datos en JavaScript. Este módulo permite crear esquemas de datos usando un lenguaje simple, comprensible e intuitivo.

A la hora de interactuar con una API, es muy importante que se validen los datos tanto en el lado del servidor como en el del cliente para tener controlados posibles errores y la forma en la que se interactúa con la base de datos.

Anteriormente Joi pertenecía al ecosistema de Hapi, un framework para crear aplicaciones en Node, pero a partir de la versión 12.1.0 decidió dejar de formar parte de este framework y ser un paquete totalmente independiente, lo cual facilita aún más la integración con este.

Integrar Joi en nuestro proyecto

Lo instalaremos como dependencia en el proyecto:

$ npm install --save joi $ npm install --save-dev @types/joi

Fuente: https://duprez.medium.com/validaci%C3%B3n-con-joi-y-nestjs-f11cc32dbf4b

# Probando nuestros endpoints

hasta este video desde hace 3 videos atras llevo preguntandome que pasa si quiero que un middleware solo se ejecute en una sola ruta, me parece que se deberia haber explicado en el primer punto de que son los middleware...
2
Se podría hacer las validaciones en otro lugar, hay alternativas a ponerlo en el middleware. Idealmente me gustaría hacerlos luego de ya tener todos los datos que vienen de req.body, req.params, req.query pero antes de que llegue al servicio ? como se puede hacer esto de una forma escalable ? Qué tan buena práctica seria ponerlo en los servicios al principio de cada método?

2

Responder

Jherom Chacon
Jherom Chacon

Estudiante
•
hace 2 años
Hola Andrés, de hecho las validaciones se realizan antes de llegar al servicio, son por decirlo de alguna manera una capa intermedia que se ejecuta antes de que el endpoint llame al servicio. Puedes encadenarlos y de hecho trabajan a nivel de request
productsRouter.put('/:id',
validatorHandler(idRequiredProductSchema,'params'),
validatorHandler(updateProductSchema,'params'),
async (req, res, next) => {
await update(req, res, next)
})
En este ejemplo el orden de llamada es el siguiente

validatorHandler(idRequiredProductSchema, 'params'),
validatorHandler(updateProductSchema, 'body'),
async (req, res, next)=>{
En el ultimo es dónde se encuentra la llamada al servicio
2
hasta ahora este curso de backend con nodejs me saco el sombrero, muy buena didactica en la enseñanza y comprension de la logica a compraracion de react, wepack, nextjs que si tenia muchos vacios y muchos errores
2
Este curso es increíble, hace la diferencia un buen profesor. Me han quedado claro conceptos que no había entendido bien en cursos anteriores.
2
Muy buen curso, hasta el momento he entendido todo . El tema de los middlewares lo habia escuchado pero recien ahora lo estoy empezando a entender.

# A continuación te compartiré una lista de los middlewares más populares en Express.

CORS
Middleware para habilitar CORS (Cross-origin resource sharing) en nuestras rutas o aplicación. http://expressjs.com/en/resources/middleware/cors.html

Morgan
Un logger de solicitudes HTTP para Node.js. http://expressjs.com/en/resources/middleware/morgan.html

Helmet
Helmet nos ayuda a proteger nuestras aplicaciones Express configurando varios encabezados HTTP. ¡No es a prueba de balas de plata, pero puede ayudar! https://github.com/helmetjs/helmet

Express Debug
Nos permite hacer debugging de nuestras aplicaciones en Express mediante el uso de un toolbar en la pagina cuando las estamos desarrollando. https://github.com/devoidfury/express-debug

Express Slash
Este middleware nos permite evitar preocuparnos por escribir las rutas con o sin slash al final de ellas. https://github.com/ericf/express-slash

Passport
Passport es un middleware que nos permite establecer diferentes estrategias de autenticación a nuestras aplicaciones. https://github.com/jaredhanson/passport

Puedes encontrar más middlewares populares en el siguiente enlace: http://expressjs.com/en/resources/middleware.html
2
Lo dice como algo súper bueno José, pues Passport te permite manejar la autenticación y protección de tus endpoints a partir de mecanismos de seguridad, desde cookies, pasando por JWT tokens hasta el sofisticado OAuth 2.0. Y lo mejor, es muy sencillo de usar.
2
Pude encontrar el paquete para agregar swagger. El siguiente código lo agregué en el index.js

const swaggerUi = require('swagger-ui-express');

const swaggerOptions={
swaggerDefinition:{
info:{
title: 'Ecommerce API',
description:"This api has CRUD of products",
contact:{
name:"Merchan"
},
servers:[]
}
},
apis:["index.js"]
}

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

/\*\*

- @swagger
- /test:
- get:
- description: Use to request
- responses:
-      '200':
-        description: A successful response
  \*/
  app.get('/test',(req,res)=>{
  res.status(200).send('Test')
  });
  2
  Para quienes no sepan qué es un logger, y para qué sería útil usar Morgan:

En el caso de implementaciones de APIs uno de los mayores problemas es poder rastrear el flujo de una única petición, ya que cuando hay muchas peticiones concurrentes, los logs (o el historial) de todas ellas se mezclan haciendo imposible su seguimiento salvo que tengan un identificador único. Ya que express.js carece de un uuid por request, podemos usar esta librería para asignar nosotros mismos ese identificardo y poder rastrear las peticiones.
2
Otros middlewares interesantes: express-session cookie-parser method-override multer express-validator
2
Existe algún middleware para mostrar los endpoints con swagger?
22
Hola, si claro mi con este paquete puede lograr la documentación swagger-ui-express
2
¿Cuándo se crea una web, es necesario ponerte todos esos middlewares siempre? o solo se pone 1, no entiendo
22
Estos middlewares son recomendados para ciertos casos, cada uno cumple con una funcionalidad así que si ves que alguno de esos beneficia a tu proyecto tus puedes elegirlo de acuerdo a tus necesidades.
2
importante que todo proyecto tenga una buena documentacion Swagger es muy util ya que si entra una persona que no conoce se le hara mas facil
2
¿Cómo podemos hacer tests a nuestro servidor de express? ¿Hay alguna libreia para este proposito?
22
Hola, Se puede usar Jest para realizar testing en el backend, incluso Platzi tiene un curso de Jest: https://platzi.com/clases/jest/

Así mismo, te dejo un buen artículo al respecto: https://dev.to/lukekyl/testing-your-express-js-backend-server-3ae6

# Consideraciones para producción

Según lo que he leído en la documentación para habilitar CORS en todos los requests la solución sería añadir:

const cors = require('cors');
app.use(cors());
Si solo queremos hacer CORS a los endpoints de nuestra API, bajamos app.use(cors()) justo antes de que empiecen nuestras rutas hacia la API. (Esa sería mi solución)
https://medium.com/zero-equals-false/using-cors-in-express-cac7e29b005b#:~:text=The%20easiest%20way%20to%20get,using%20the%20cors%20npm%20module.&text=That's%20it.,CORS%20is%20now%20enabled.&text=The%20Access%2DControl%2DAllow%2D,allows%20access%20from%20any%20origin
2
Un breve resumen de las consideraciones para producción:

Cors: Que acceso y a quienes le damos acceso para hacer solicitudes
Https: Que la API esta sobre servidor de HTTPS
Procesos de Build: Se ve en procesos que cosas que tiene procesar información (typescript)
Remover logs: No es bueno tener logs, a veces esto tiene demoras, existen mejor formas para capturar logs.
Seguridad (helmet): Muy importante la seguridad y para esto se recomienda helmt que es una colección de Middleware que colocan capas de segridad a la aplicación
Testing: Correr prebas unitarias o de integración antes de salir de producción
2
Existen distintas soluciones.

Podemos agregar el cors como middleware a la ruta:

const cors = require('cors');

app.get('/products/:id', cors(), function (req, res, next) {
res.json({msg: 'This is CORS-enabled for a Single Route'})
})
O también podemos agregarlo como un middleware general.

const cors = require('cors');
app.use(cors());
Recuerda que también podemos configurar algunas opciones:

const cors = require('cors');

var corsOptions = {
origin: 'https://example.com',
optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions ));
22
Yo veo la tercera opción más segura si tenemos un Frontend que se va a conectar a nuestra API de Node. Ejemplo si mi Frontend esta en GCloud y mi API en AWS. Le das el origen del frontend a tu api.
😎
2
https://medium.com/zero-equals-false/using-cors-in-express-cac7e29b005b#:~:text=The%20easiest%20way%20to%20get,using%20the%20cors%20npm%20module.&text=That's%20it.,CORS%20is%20now%20enabled.&text=The%20Access%2DControl%2DAllow%2D,allows%20access%20from%20any%20origin
2
https://platzi.com/clases/testing-cypress/
2
Lo ideal en mi caso es agregar el dominio desde el cual estoy haciendo la peticion en el achivo .htacces donde esta ubicada mi API.
2
CORS, o Cross-Origin Resource Sharing, es un mecanismo de seguridad que permite o restringe cómo los recursos en un servidor pueden ser solicitados desde un dominio diferente al que sirvió el recurso. Por defecto, los navegadores bloquean estas solicitudes para proteger la seguridad del usuario. Para habilitar CORS, el servidor debe incluir encabezados específicos en sus respuestas que indiquen que permite el acceso a estos recursos desde otros orígenes.

Manejar correctamente CORS es esencial al desarrollar APIs para evitar problemas de acceso.
2
Consideraciones para el envio a Produccion
Cors: Evaluacion de acceso a quienes hacen las solicitudes.
Https: La api debe estar desplegada en un servidor https ya que es mas seguro.
Proceso de Build: Se debera correr antes de produccion.
Logs: A produccion no se debe enviar los logs.
Seguridad (Helmet): Es esencial.
Testing: Seria ideal correr pruebas unitarias.
2
Qué desventajas tengo cuando permito cors ? es buena idea habilitar un cors general para todos los endpoints de la app ?
22
Hola, no es buena idea, tú deberías solo dar acceso a los dominios por los cuales quieren que te consuman, aunque hay algunos casos en donde quieres que quede totalmente publica, en donde no importa de donde se conecten, por ejemplo la API de la NASA, Platzi Fake API etc, entonces va a depender de tu necesidad.
2
Y cuando es a mi que me sale el problema del CORS por conectarme a otra API como se soluciona? Me acuerdo del curso de Vue2 que haciamos un Exchange de Criptomonedas y me salia ese error de CORS, unas veces si, otras veces no, siempre tenia que estar recargandole a ver si ya salia bien... Como se soluciona?
22
Este es un error que se soluciona desde el backend es decir la API debe poder explícitamente soportar conexiones desde otros lados hay algunas maneras en la cuales puedes crear un proxy en tu local, es más hay hasta algunas extensiones en Chrome que te pueden ayudar. Sin embargo, la solución es más desde del backend.
https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en
2
Un breve resumen de las consideraciones para producción:

Cors: Que acceso y a quienes le damos acceso para hacer solicitudes
Https: Que la API esta sobre servidor de HTTPS
Procesos de Build: Se ve en procesos que cosas que tiene procesar información (typescript)
Remover logs: No es bueno tener logs, a veces esto tiene demoras, existen mejor formas para capturar logs.
Seguridad (helmet): Muy importante la seguridad y para esto se recomienda helmt que es una colección de Middleware que colocan capas de segridad a la aplicación
Testing: Correr prebas unitarias o de integración antes de salir de producción
