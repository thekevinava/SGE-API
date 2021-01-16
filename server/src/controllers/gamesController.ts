import { Request, Response } from 'express';
import pool from '../database';

class GamesController {
    public async list (req: Request, res: Response) {
        const games = await pool.then((r:any) => r.query('SELECT * FROM games'));
        res.json(games);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params; // Recojo la ID de los Parámetros
        const game = await pool.then((r:any) => r.query('SELECT * FROM games WHERE id = ?', [id]));
        if (game.length > 0) {
            return res.json(game[0]);
        }
        res.status(404).json({text: 'El juego no existe'});
    }

    public async addGame (req: Request, res: Response) {
        await pool.then((r:any) => r.query('INSERT INTO games set ?', [req.body]));
        res.json({message: 'Juego guardado', data: req.body});
    }

    public async deleteGame (req: Request, res: Response) {
        const { id } = req.params; // Recojo la ID de los Parámetros
        await pool.then((r:any) => r.query('DELETE FROM games WHERE id = ?', [id]));
        res.json({message: 'Juego eliminado'});
    }

    public async updateGame (req: Request, res: Response) {
        const { id } = req.params; // Recojo la ID de los Parámetros
        await pool.then((r:any) => r.query('UPDATE games set ? WHERE id = ?', [req.body, id]));
        res.json({message: 'Juego actualizado', data: req.body});
    }
}

const gamesController = new GamesController();
export default gamesController;