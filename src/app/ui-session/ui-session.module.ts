import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, MatCardModule, MatDividerModule, MatButtonModule],
  exports: [CardComponent],
})
export class UiSessionModule {}
