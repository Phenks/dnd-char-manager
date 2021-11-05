import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { CharactersService } from 'src/app/_services/characters.service';
import { Character } from 'src/app/_shared/character';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less'],
})
export class CharacterDetailComponent implements OnInit {
  character$: Observable<Character> | undefined;

  constructor(
    private route: ActivatedRoute,
    private charService: CharactersService
  ) {
    this.character$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.charService.get(Number(params.get('id')));
      })
    );
  }

  ngOnInit(): void {}
}
