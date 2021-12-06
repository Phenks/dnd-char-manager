import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { UserData } from '../_shared/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private auth2?: gapi.auth2.GoogleAuth;
  public userSubject = new ReplaySubject<UserData | null>();
  private userToken?: string;
  constructor(private http: HttpClient) {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          '313667029932-l7ners2v38n8jhlp1huj6dv74ivq4g9b.apps.googleusercontent.com',
      });
    });
    if (localStorage.getItem('userToken')) {
      this.userToken = localStorage.getItem('userToken') as string;
      this.userSubject.next(this.parseJwtToUserData(this.userToken));
    }
  }

  public signIn() {
    this.auth2
      ?.signIn()
      .then((user) => {
        const idToken = user.getAuthResponse().id_token;
        this.http
          .post<{ authToken: string }>(
            'https://localhost:44338/User/authenticate',
            {
              IdToken: idToken,
            }
          )
          .subscribe((userToken) => {
            localStorage.setItem('userToken', userToken.authToken);
            this.userSubject.next(this.parseJwtToUserData(userToken.authToken));
          });
      })
      .catch(() => {});
  }
  public signOut() {
    this.auth2?.signOut();
    this.userSubject.next(null);
    localStorage.removeItem('userToken');
  }

  public user(): Observable<UserData | null> {
    return this.userSubject.asObservable();
  }

  get AuthToken(): string | undefined {
    return this.userToken;
  }

  parseJwtToUserData(token: string): UserData {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    const payload = JSON.parse(jsonPayload);
    return {
      name: payload[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
      ],
      role: payload[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ],
    };
  }
}
