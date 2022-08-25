import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {
  CharacterSelect,
  SelectComponent,
} from 'src/app/feature-characters/select/select.component';
import { CharactersService } from 'src/app/_services/characters.service';
import { GameSessionService } from 'src/app/_services/game-session.service';
import { SessionsService } from 'src/app/_services/sessions.service';
import { SessionDetail } from 'src/app/_shared/session';

@Component({
  selector: 'session-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less'],
})
export class DetailComponent implements OnInit {
  $gameSession?: Observable<SessionDetail | null>;
  sessionId: string | null = null;
  constructor(
    public gameService: GameSessionService,
    private dialog: MatDialog,
    private sessionService: SessionsService,
    route: ActivatedRoute
  ) {
    this.$gameSession = gameService.gameSession$;

    route.paramMap.subscribe((data) => {
      this.sessionId = data.get('id');
      if (this.sessionId) {
        gameService.loadSessionData(this.sessionId);
      }
    });
  }

  ngOnInit(): void {}

  joinSession(charId: number) {
    this.gameService.joinSession(charId);
  }

  joinAsPlayer() {
    const dialogRef = this.dialog.open(SelectComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result: CharacterSelect) => {
      if (result) {
        this.joinSession(result.characterId);
      }
    });
  }

  openSession() {
    if (!this.sessionId) {
      return;
    }
    this.sessionService.partialUpdate({
      id: Number(this.sessionId),
      status: 'OPEN',
    });
  }
}
