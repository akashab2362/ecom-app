import express from 'express';
import error from './middleware/error.js';
const app = express();

app.use(express.json());

//Route Imports
import products from "./routes/productRoute.js";

//Middleware for error
app.use(error);

app.use('/api/v1', products);


export default app;