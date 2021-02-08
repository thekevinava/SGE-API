import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  API_URL = 'http://localhost:3000/api/games';
  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(this.API_URL);
  }

  getGame(id: string) {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  saveGame(game: Game) {
    return this.http.post(this.API_URL, game);
  }


}
