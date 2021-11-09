import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from 'src/app/_services/characters.service';
import { Character } from 'src/app/_shared/character';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class CharacterDashboardComponent {
  characters: Character[] = [];

  constructor(characterService: CharactersService, private router: Router) {
    this.characters = characterService.getAll();
  }

  routeToCharPage(char: Character): void {
    this.router.navigate(['characters', char.id]);
  }

  routeToNewChar(): void {
    this.router.navigate(['characters', 'new']);
  }
}
