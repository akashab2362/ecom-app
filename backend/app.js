import express from 'express';
const app = express();

app.use(express.json());

//Route Imports
import products from "./routes/productRoute.js";

app.use('/api/v1', products);


export default app;