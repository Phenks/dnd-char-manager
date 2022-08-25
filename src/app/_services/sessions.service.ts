import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Session } from '../_shared/session';
import { ApiServiceBase } from './api-service-base';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class SessionsService extends ApiServiceBase<Session> {
  openSessions$ = this.data$.pipe(
    map((data) => {
      let filtered = data.filter((session) => session.status === 'OPEN');
      return filtered;
    })
  );

  mySessions$ = this.data$.pipe(
    map((data) => {
      let filtered = data.filter(
        (session) => session.creatorId == this.userService.user?.id
      );
      return filtered;
    })
  );

  constructor(http: HttpClient, public userService: UserService) {
    super(http, 'sessions');
  }
}
