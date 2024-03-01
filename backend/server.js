import app from './app';
import dotenv from 'dotenv';

dotenv.config({path: "backend/config/config.env"});

app.listen(process.env.PORT, ()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})