import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from "path";
import bodyParser from 'body-parser';

dotenv.config();

const PORT = process.env.PORT || 4000;

import loginRouter from './routes/login';
import productRouter from './routes/productaccess';
import {products} from "./mockdata/products.mockdata";

var app = express();

const allowedOrigins = ['http://localhost:5173'];
const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (allowedOrigins.indexOf(origin!) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Nicht erlaubter Ursprung'));
        }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Erlaubte HTTP-Methoden
    credentials: true, // Erlaube Cookies zu senden mit CORS-Anfragen
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', loginRouter);
app.use('/products', productRouter);

module.exports = app;
