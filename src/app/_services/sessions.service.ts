import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, share } from 'rxjs';
import { Session } from '../_shared/session';
import { environment } from './../../environments/environment';
import { ApiServiceBase } from './api-service-base';

@Injectable({
  providedIn: 'root',
})
export class SessionsService extends ApiServiceBase<Session> {
  constructor(http: HttpClient) {
    super(http, 'sessions');
  }
}
