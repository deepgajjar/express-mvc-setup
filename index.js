import express from "express";
import userRoutes from './routes/user.js';

const app = express();
const PORT = 3000;
app.use(express.json());

app.use("/api/user", userRoutes);

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running")
    else 
        console.log("Error occurred, server can't start", error);
    }
);