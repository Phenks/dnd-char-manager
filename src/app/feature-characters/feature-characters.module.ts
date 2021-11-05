import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDashboardComponent } from './dashboard/dashboard.component';
import { UiCharactersModule } from '../ui-characters/ui-characters.module';
import { CharacterDetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [CharacterDashboardComponent, CharacterDetailComponent],
  imports: [CommonModule, UiCharactersModule],
  exports: [CharacterDashboardComponent, CharacterDetailComponent],
})
export class FeatureCharactersModule {}
