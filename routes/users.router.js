import express from 'express';
const router = express.Router();

// * GET: parámetros query
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
     limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }
});

export default router;
