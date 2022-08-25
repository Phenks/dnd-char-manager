import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/_shared/character';

@Component({
  selector: 'ui-util-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.less'],
})
export class ItemCardComponent implements OnInit {
  @Input() item?: Item;

  constructor() {}

  ngOnInit(): void {}
}
