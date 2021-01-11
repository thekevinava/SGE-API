"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    /**
     * Configuro el servidor y el puerto
     */
    config() {
        this.app.set('port', process.env.PORT || 3000); // Configuro el puerto
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json()); // Trabajar con JSON
        this.app.use(express_1.default.urlencoded({ extended: false })); // Trabajar con URLs
    }
    /**
     * Rutas de nuestra API
     */
    routes() {
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor escuchando en el puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
