import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterDetail } from 'src/app/_shared/character';

@Component({
  selector: 'ui-character-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent implements OnInit {
  @Input() character: CharacterDetail | undefined;
  constructor() {}

  ngOnInit(): void {}

  get ImageUrl(): string {
    return (
      this.character?.imageURL ||
      `assets/char-images/${this.character?.classes[0].toLowerCase()}.jpg`
    );
  }
}
