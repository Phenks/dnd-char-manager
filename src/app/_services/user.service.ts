import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { UserData } from '../_shared/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private auth2?: gapi.auth2.GoogleAuth;
  public userSubject = new ReplaySubject<UserData | null>();

  constructor() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          '313667029932-l7ners2v38n8jhlp1huj6dv74ivq4g9b.apps.googleusercontent.com',
      });
    });
    if (localStorage.getItem('user')) {
      const user = localStorage.getItem('user') as string;
      this.userSubject.next(JSON.parse(user));
    }
  }

  public signIn() {
    this.auth2
      ?.signIn({})
      .then((user) => {
        const userObj = {
          name: user.getBasicProfile().getName(),
          googleId: user.getId(),
        };
        this.userSubject.next(userObj);
        localStorage.setItem('user', JSON.stringify(userObj));
      })
      .catch(() => {});
  }
  public signOut() {
    this.auth2?.signOut();
    this.userSubject.next(null);
    localStorage.removeItem('user');
  }

  public user(): Observable<UserData | null> {
    return this.userSubject.asObservable();
  }
}
