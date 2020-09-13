import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import products from './routers/products';
import categories from './routers/categories';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/products', products);
app.use('/api/categories', categories);

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
