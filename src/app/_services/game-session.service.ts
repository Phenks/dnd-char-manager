import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SessionDetail } from '../_shared/session';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import * as signalR from '@aspnet/signalr';
import { CharactersService } from './characters.service';
import { SessionsService } from './sessions.service';

@Injectable({
  providedIn: 'root',
})
export class GameSessionService {
  private _gameSession = new BehaviorSubject<SessionDetail | null>(null);
  private id: string | null = null;

  gameSession$ = this._gameSession.asObservable();

  connection?: signalR.HubConnection;

  characterId: null | number = null;

  get gameSessionEndPoint(): string {
    return environment.apiUrl + 'gameSession';
  }
  get sessionEndPoint(): string {
    return environment.apiUrl + 'gameSession';
  }
  constructor(route: ActivatedRoute, router: Router, private http: HttpClient) {
    route.paramMap.subscribe((data) => {
      if (router.url.includes('/session/')) {
        this.id = data.get('id');
        if (this.id) {
          this.loadSessionData(this.id);
        }
      }
    });
  }

  loadSessionData(id: string) {
    let sessionRequest = this.http.get<SessionDetail>(
      environment.apiUrl + 'sessions/' + id
    );
    sessionRequest.subscribe((data) => {
      this._gameSession.next(data);
    });
  }

  joinSession(characterId: number | null) {
    this.characterId = characterId;
    this.startConnection();
  }
  broadcastCharacter(characterId: number) {
    this.connection?.invoke('broadcastCharacter', characterId);
  }

  addHubListener() {
    this.connection?.on('broadcastCharacter', (data) => {
      console.log(data);
    });
  }

  startConnection() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(this.gameSessionEndPoint)
      .build();
    this.addHubListener();
    this.connection
      .start()
      .then(() => {
        console.log('started');
        if (this.characterId) {
          this.broadcastCharacter(this.characterId);
        }
      })
      .catch((err) => console.log('Error while starting connection'));
  }
}
