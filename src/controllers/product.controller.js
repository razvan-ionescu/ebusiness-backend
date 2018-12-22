const yup = require('yup');
const productService = require('../services/product.service');
const errorHandler = require('../utils/errorHandler');

const postSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().required(),
  categoryId: yup.string().required()
});

const updateSchema = yup.object().shape({
  name: yup.string(),
  description: yup.string(),
  price: yup.number(),
  categoryId: yup.string()
});

module.exports = {
  getProducts: async (req, res, next) => {
    try {
      const products = await productService.getProducts();
      res.status(200).send(products);
    } catch (e) {
      errorHandler(e, next);
    }
  },
  postProduct: async (req, res, next) => {
    try {
      await postSchema.validate(req.body);
      const product = await productService.createProduct(req.body);
      res.status(201).send(product);
    } catch (e) {
      errorHandler(e, next);
    }
  },
  patchProduct: async (req, res, next) => {
    try {
      await updateSchema.validate(req.body);
      const product = await productService.updateProduct(
        req.params.id,
        req.body
      );
      res.status(200).send(product);
    } catch (e) {
      errorHandler(e, next);
    }
  },
  deleteProduct: async (req, res, next) => {
    try {
      await productService.deleteProduct(req.params.id);
      res.sendStatus(204);
    } catch (e) {
      errorHandler(e, next);
    }
  },
  getProduct: async (req, res, next) => {
    try {
      const product = await productService.getProduct(req.params.id);
      res.status(200).send(product);
    } catch (e) {
      errorHandler(e, next);
    }
  }
};
