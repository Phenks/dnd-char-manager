import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { CharactersService } from 'src/app/_services/characters.service';
import { CharacterDetail } from 'src/app/_shared/character';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class CharacterDashboardComponent {
  characters$: Observable<CharacterDetail[]>;

  constructor(characterService: CharactersService, private router: Router) {
    this.characters$ = characterService.getAll();
  }

  routeToCharPage(char: CharacterDetail): void {
    this.router.navigate(['characters', char.id]);
  }

  routeToNewChar(): void {
    this.router.navigate(['characters', 'new']);
  }
}
