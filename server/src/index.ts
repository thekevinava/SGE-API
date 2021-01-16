import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';

class Server {

    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    /**
     * Configuro el servidor y el puerto
     */
    config(): void {
        this.app.set('port', process.env.PORT || 3000); // Configuro el puerto
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json()); // Trabajar con JSON
        this.app.use(express.urlencoded({ extended: false })); // Trabajar con URLs
    }

    /**
     * Rutas de nuestra API
     */
    routes(): void {
        this.app.use('/', indexRoutes)
        this.app.use('/api/games', gamesRoutes)
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor escuchando en el puerto', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();