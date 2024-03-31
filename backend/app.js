import express from 'express';
const app = express();
import error from './middleware/error.js';
import cookieParser from 'cookie-parser';

import dotenv from "dotenv";

// Config
dotenv.config({ path: "backend/config/config.env" });

app.use(express.json());
app.use(cookieParser());

//Route Imports
import products from "./routes/productRoute.js";
import user from './routes/userRoutes.js';

import payment from "./routes/paymentRoute.js";

app.use('/api/v1', products);
app.use('/api/v1', user);

app.use('/api/v1', payment);

//Middleware for error
app.use(error);


export default app;