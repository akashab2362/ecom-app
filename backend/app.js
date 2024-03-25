import express from 'express';
import error from './middleware/error.js';
import cookieParser from 'cookie-parser';
const app = express();

app.use(express.json());
app.use(cookieParser());

//Route Imports
import products from "./routes/productRoute.js";
import user from './routes/userRoutes.js';
import order from './routes/orderRoute.js';

app.use('/api/v1', products);
app.use('/api/v1', user);
app.use('/api/v1', order);

//Middleware for error
app.use(error);


export default app;