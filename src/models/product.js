import mongoose from 'mongoose';
import { categorySchema } from './category';

const Product = mongoose.model('Product', {
  name: { type: String, require: true },
  price: { type: Number, require: true },
  category: { type: categorySchema, required: true },
});

export default Product;
