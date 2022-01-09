import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Session } from 'src/app/_shared/session';

@Component({
  selector: 'ui-session-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent implements OnInit {
  @Input() session?: Session;
  @Input() isDm?: boolean;

  @Output() dmNavigationClick = new EventEmitter();
  @Output() joinClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onCardClick() {
    if (this.isDm) {
      this.dmNavigationClick.emit();
    }
  }

  onJoinClick() {
    this.joinClick.emit();
  }
}
