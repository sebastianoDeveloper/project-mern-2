import express from 'express';
import routerApi from './routes/index.js';
import cors from 'cors';
import handlers from './middlewares/error.handler.js';
const app = express();
const port = process.env.PORT || 3000;
// const ipv4 = '192.168.0.14'
// const port = 8080

// app.get('/', (req, res) => {
//   res.send('¡Hola, Express está funcionando!');
// });
// app.listen(port, () => {
//   console.log(`Servidor corriendo en http://${ipv4}:${port}/`);
// });
// app.listen(process.env.PORT || 3000);
// app.set('json spaces', 2);1
app.get('/', (req, res) => {
  res.send('¡Hola desde la raíz!');
});

app.get('/test', (req, res) => {
  res.send('¡Prueba exitosa!');
});

app.get('/api/prueba', (req, res) => {
    res.json({ mensaje: "Prueba API"})
})


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
export default app
// ! AQUI
// app.use(express.json())
// const whiteList = ['http://localhost:5500', 'http://myapp.pe'];
// const options = {
//   origin : (origin, callback) => {
//     if (whiteList.includes(origin) || !origin) {
//       callback(null,true)
//     } else {
//       callback(new Error('no permitido'))
//     }
//   }
// };
// app.use(cors(options))
// app.get('/api', (req, res) => {
//   res.send('¡Hola, Express está funcionando!');
// });
// app.get('/api/new-route', (req, res) => {
//   res.send('¡Hola, soy una nueva ruta!');
// });
// routerApi(app);

// app.use(handlers.logErrors)
// app.use(handlers.boomErrorHandler)
// app.use(handlers.errorHandler)


// // // * Dos parametro
// // app.get('/categories/:categoryId/products/:productId', (req, res) => {
// //   const {categoryId,productId} = req.params;
// //   res.json({
// //    categoryId,
// //     productId,
// //   });
// // });

// // //http://localhost:3000/users?limit=10&offset=20

// app.listen(port, () => {
//   console.log('Servidor corriendo en http://localhost:'+port);
// });
// const server = app.listen(0, () => {
//   const portUsed = server.address().port; // Obtiene el puerto dinámico
//   console.log('Servidor corriendo en http://localhost:' + portUsed);
// });