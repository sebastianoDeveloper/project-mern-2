Qué es Express?
es el framework web más popular de Node, y es la librería subyacente para un gran número de otros frameworks web de Node populares. Proporciona mecanismos para:

Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).
Integración con motores de renderización de "vistas" para generar respuestas mediante la introducción de datos en plantillas.
Establecer ajustes de aplicaciones web como qué puerto usar para conectar, y la localización de las plantillas que se utilizan para renderizar la respuesta.
Añadir procesamiento de peticiones "middleware" adicional en cualquier punto dentro de la tubería de manejo de la petición.
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
