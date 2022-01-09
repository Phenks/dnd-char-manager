import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCardComponent } from './add-card/add-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AddCardComponent],
  imports: [MatCardModule, CommonModule],
  exports: [AddCardComponent],
})
export class UiUtilModule {}
