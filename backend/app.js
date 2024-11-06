"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const PORT = process.env.PORT || 4000;
const login_1 = __importDefault(require("./routes/login"));
const productaccess_1 = __importDefault(require("./routes/productaccess"));
var app = (0, express_1.default)();
/*
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
app.use(cors(corsOptions));*/
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/login', login_1.default);
app.use('/products', productaccess_1.default);
module.exports = app;
