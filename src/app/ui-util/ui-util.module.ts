import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCardComponent } from './add-card/add-card.component';
import { MatCardModule } from '@angular/material/card';
import { ItemCardComponent } from './item-card/item-card.component';

@NgModule({
  declarations: [AddCardComponent, ItemCardComponent],
  imports: [MatCardModule, CommonModule],
  exports: [AddCardComponent, ItemCardComponent],
})
export class UiUtilModule {}
