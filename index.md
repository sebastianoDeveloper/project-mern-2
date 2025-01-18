```js
import express from "express";
```

traemos a express ¿como? lo importas

```JS
const app = express();
```

creas una APP ¿como? Inicializando el app express en la variable app

```JS
const port = 3000;
```

le decimos el puerto en que queremos que corra la aplicación

```JS
app.get('/', (req, res) => {
  res.send('¡Hola, Express está funcionando!');
});
```

- definimos la ruta
- tiene un callback que va a ejecutar la respuesta que enviemos al cliente.
- el callback siempre tiene dos parámetros "req" y "res"

- .get decidira que cuando obtiene esa ruta en especifico ´´./´´ debe dar la respuesta que se especifica en la funcion. Esta toa dos argumentos 1: la URL y 2: a función que le dice a express qué enviar a la persona que hace la solicitud ´´hello express´´.

```JS
app.get('/new-route', (req, res) => {
  res.send('¡Hola, SOY LA NUEVA RUTA!');
});
app.get('/products', (req, res) => {
  res.send('¡Hola, SOY LA RUTA PRODUCTOS!');
});
```

```js
app.get("/json", (req, res) => {
  res.json({
    name: "¡Hola, SOY LA RUTA PRODUCTOS!",
    price: 1000,
  });
});
```

```js
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:" + port);
});
```

- le decimos a la aplicación en que puesto escuchar
- además creamos un callback que nos avisará cuando esté corriendo

- Linea 4: .listen vinculará la aplicación al puerto de nuestra máquina.
