import app from './app.js';
import dotenv from "dotenv";
import connectDatabase from './config/database.js';

dotenv.config({path: "backend/config/config.env"});

//Connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
