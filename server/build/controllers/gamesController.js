"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.then((r) => r.query('SELECT * FROM games'));
            res.json(games);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // Recojo la ID de los Parámetros
            const game = yield database_1.default.then((r) => r.query('SELECT * FROM games WHERE id = ?', [id]));
            if (game.length > 0) {
                return res.json(game[0]);
            }
            res.status(404).json({ text: 'El juego no existe' });
        });
    }
    addGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => r.query('INSERT INTO games set ?', [req.body]));
            res.json({ message: 'Juego guardado', data: req.body });
        });
    }
    deleteGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // Recojo la ID de los Parámetros
            yield database_1.default.then((r) => r.query('DELETE FROM games WHERE id = ?', [id]));
            res.json({ message: 'Juego eliminado' });
        });
    }
    updateGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // Recojo la ID de los Parámetros
            yield database_1.default.then((r) => r.query('UPDATE games set ? WHERE id = ?', [req.body, id]));
            res.json({ message: 'Juego actualizado', data: req.body });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
