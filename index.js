import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola, Express está funcionando!');
});
app.get('/new-route', (req, res) => {
  res.send('¡Hola, SOY LA NUEVA RUTA!');
});
app.get('/products', (req, res) => {
  res.send('¡Hola, SOY LA RUTA PRODUCTOS!');
});
app.get('/json', (req, res) => {
  res.json({
    name: '¡Hola, SOY LA RUTA PRODUCTOS!',
    price: 1000,
  });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
