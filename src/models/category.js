import mongoose from 'mongoose';

export const categorySchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
