import { Router } from 'express';
import gamesController from '../controllers/gamesController';

class GamesRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.getOne);
        this.router.post('/', gamesController.addGame);
        this.router.put('/:id', gamesController.updateGame);
        this.router.delete('/:id', gamesController.deleteGame);
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;