import express from 'express';
import mongoose from 'mongoose';
import products from './routers/products';
import categories from './routers/categories';

const app = express();
app.use(express.json());
app.use('/api/products', products);
app.use('/api/categories', products);

// const categorySchema = new mongoose.Schema({
//   name: { type: String, require: true },
//   description: { type: String, require: true },
// });

// const Category = mongoose.model('Category', categorySchema);

const connectToDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/lazadaDB', {
      useNewUrlParser: true,
    });
    console.log('Connected to MongoDB...');
  } catch (error) {
    console.log('Could not connect to MongoDB...');
  }
};

connectToDB();

app.listen(3001, () => console.log(`Listening to Port 3001`));
