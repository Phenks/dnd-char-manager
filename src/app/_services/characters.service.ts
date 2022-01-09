import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  EMPTY,
  filter,
  first,
  map,
  Observable,
  of,
  ReplaySubject,
  share,
  Subject,
} from 'rxjs';
import { CharacterDetail } from '../_shared/character';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  public characters$: Subject<CharacterDetail[]>;

  constructor(private http: HttpClient) {
    this.characters$ = new ReplaySubject(1);
    this.loadCharacters();
    // [
    //   {
    //     id: 1,
    //     name: 'Khalitu',
    //     gender: 'female',
    //     currency: 'One Bazillion Gold',
    //     level: 9001,
    //     race: 'Dragonborn',
    //     image: 'http://localhost:4200/assets/dragonborn.jpg',
    //     avatar:
    //       'data:image/jpeg;base64,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',
    //     description: 'the best dragonborn thats also a binsch',
    //   },
    //   {
    //     id: 2,
    //     name: 'Ked',
    //     gender: 'male',
    //     currency: 'One Fifty',
    //     level: 150,
    //     race: 'Orc',
    //     image:
    //       'https://i.pinimg.com/originals/46/78/29/467829bb2258c796746bc2648d619cfd.png',
    //     avatar:
    //       'data:image/jpeg;base64,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',
    //     description: 'the best dragonborn thats also a binsch',
    //   },
    // ];
  }

  getAll(): Observable<CharacterDetail[]> {
    return this.characters$.asObservable();
  }

  get(id: number): Observable<CharacterDetail> {
    return this.characters$.pipe(
      map((chars) => chars.filter((c) => c.id === id)[0])
    );
  }

  create(beyondUrl: string) {
    let urlAsArray = beyondUrl.split('/');
    let charId = urlAsArray[urlAsArray.length - 1];
    var request = this.http
      .post('https://localhost:44338/Characters', {
        characterId: charId,
      })
      .pipe(share());
    request.subscribe((c) => {
      this.loadCharacters();
    });
    return request;
  }

  loadCharacters() {
    this.http
      .get<CharacterDetail[]>('https://localhost:44338/Characters')
      .subscribe((chars) => this.characters$.next(chars));
  }
}
