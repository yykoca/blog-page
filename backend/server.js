import dotenv from "dotenv";
import express from "express";
dotenv.config();

const server = express();

server.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`)
})


server.use(express.json());
server.use(express.urlencoded({extended: true}));
