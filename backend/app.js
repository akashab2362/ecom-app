import express from "express";
import error from "./middleware/error.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route Imports
import products from "./routes/productRoute.js";
import user from "./routes/userRoutes.js";
import order from "./routes/orderRoute.js";

app.use("/api/v1", products);
app.use("/api/v1", user);
app.use("/api/v1", order);

//Middleware for error
app.use(error);

export default app;
