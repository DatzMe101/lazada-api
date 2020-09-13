import express from 'express';
import Category from '../models/category';
const router = express.Router();

router.get('/', async (req, res) => {
  const categories = await Category.find();
  res.send(categories);
});

router.get('/:id', async (req, res) => {
  const category = await Category.findById(req.params.id);
  res.send(category);
});

router.post('/', async (req, res) => {
  const { name, description } = req.body;
  const category = new Category({
    name,
    description,
  });
  const result = await category.save();
  res.send(result);
});

router.put('/:id', async (req, res) => {
  const body = {
    name: req.body.name,
    description: req.body.description,
  };
  const category = await Category.findByIdAndUpdate(req.params.id, body, {
    new: true,
  });
  res.send(category);
});

router.delete('/:id', async (req, res) => {
  const result = await Category.findByIdAndRemove(req.params.id);
  res.send(result);
});

export default router;
