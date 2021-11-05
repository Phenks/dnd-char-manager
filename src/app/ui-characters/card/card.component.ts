import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/_shared/character';

@Component({
  selector: 'ui-character-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent implements OnInit {
  @Input() character: Character | undefined;
  @Output() click = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
