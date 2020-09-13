import express from 'express';
import Product from '../models/product';
const router = express.Router();

router.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.send(product);
});

router.post('/', async (req, res) => {
  const { name, price, categoryId } = req.body;
  const category = await Category.findById(categoryId);
  const product = new Product({
    name,
    price,
    category: {
      _id: category._id,
      name: category.name,
    },
  });
  const result = await product.save();
  res.send(result);
});

router.put('/:id', async (req, res) => {
  const body = {
    name: req.body.name,
    price: req.body.price,
  };
  const product = await Product.findByIdAndUpdate(req.params.id, body, {
    new: true,
  });
  res.send(product);
});

router.delete('/:id', async (req, res) => {
  const result = await Product.findByIdAndRemove(req.params.id);
  res.send(result);
});

export default router;
