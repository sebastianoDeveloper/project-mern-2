import express from 'express';
import ProductsService from '../services/product.service.js';
import validatorHandler from '../middlewares/validator.handler.js';
import schemas from '../schemas/product.schemas.js';

const router = express.Router();
const service = new ProductsService();
// app.get('/productsClasic', (req, res) => {
//   res.json([
//     {
//       name: 'Product 1',
//       price: 1000,
//     },
//     {
//       name: 'Product 2',
//       price: 2200,
//     },
//   ]);
// });
router.get('/', async (req, res) => {
  const products = await service.find()
    res.json(products);
});

// * Un parametro definido
router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});
// * (ver a alguien en especifico)
router.get('/:id',
  validatorHandler(schemas.getProductSchema, 'params'),
  async (req, res, next) => {
  try {
    // const id = req.params.id;
    //*  el parametro debe ser igual para asi poder recibirlo
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product)
  } catch (error) {
    next(error)
  }

  // if(!product){
  //   res.status(404).json({
  //     message: `El producto con id ${id} no existe`
  //   });
  // } else {
  //   res.status(200).json({
  //     product
  //   });

  // if (id === '999') {
  //   res.status(404).json([
  //     {
  //       message: 'not found',
  //     },
  //   ]);
  // }else {
  //   res.status(200).json({
  //      id,
  //      name: 'Product 1',
  //      price: 1000,
  //   });
  // }
});
// * METODO POST (añadir)
router.post('/',
  validatorHandler(schemas.createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
});
// * METODO PATCH (update)
router.patch('/:id',
  validatorHandler(schemas.getProductSchema, 'params'),
  validatorHandler(schemas.updateProductSchema, 'body'),
  async (req, res, next) => {
  try {
    const {id} = req.params;
    const body = req.body;
    // const {body, params: {id} } = req;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    next(error);
  }
});
// * METODO DELETE (borrar)
router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  const rpta = await service.delete(id);
  res.json(rpta);
});

export default router;