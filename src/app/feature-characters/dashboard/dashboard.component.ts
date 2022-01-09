import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { CharactersService } from 'src/app/_services/characters.service';
import { CharacterDetail } from 'src/app/_shared/character';
import { NewCharComponent } from '../new/new.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class CharacterDashboardComponent {
  characters$: Observable<CharacterDetail[]>;

  constructor(
    characterService: CharactersService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.characters$ = characterService.getAll();
  }

  routeToCharPage(char: CharacterDetail): void {
    this.router.navigate(['characters', char.id]);
  }

  openNewCharacterDialog(): void {
    const dialogRef = this.dialog.open(NewCharComponent, {
      width: '45vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed' + result);
    });
  }
}
