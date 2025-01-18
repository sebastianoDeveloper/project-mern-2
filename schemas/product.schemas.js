import Joi from 'joi';

const id = Joi.string().uuid();
const name = Joi.string().pattern(/^[a-zA-Z0-9 ]+$/).min(3).max(15);
const price = Joi.number().integer().min(10).strict();
const image = Joi.string().uri();


const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});
const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
});
const getProductSchema = Joi.object({
    id: id.required(),
});
export default {createProductSchema,updateProductSchema, getProductSchema}
