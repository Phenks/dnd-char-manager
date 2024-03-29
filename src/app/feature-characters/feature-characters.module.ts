import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDashboardComponent } from './dashboard/dashboard.component';
import { UiCharactersModule } from '../ui-characters/ui-characters.module';
import { CharacterDetailComponent } from './detail/detail.component';
import { MatCardModule } from '@angular/material/card';
import { NewCharComponent } from './new/new.component';
import { CharactersEntryComponent } from './entry/entry.component';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatButtonModule } from '@angular/material/button';
import { UiUtilModule } from '../ui-util/ui-util.module';
import { SelectComponent } from './select/select.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CharacterDashboardComponent,
    CharacterDetailComponent,
    NewCharComponent,
    CharactersEntryComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    UiCharactersModule,
    MatCardModule,
    FormlyModule,
    FormlyMaterialModule,
    ReactiveFormsModule,
    UiUtilModule,
    MatDialogModule,
    RouterModule.forChild([
      {
        path: 'new',
        component: NewCharComponent,
      },
      {
        path: ':id',
        component: CharacterDetailComponent,
      },

      {
        path: '',
        component: CharacterDashboardComponent,
      },
    ]),
    MatButtonModule,
  ],
  exports: [
    CharacterDashboardComponent,
    CharacterDetailComponent,
    NewCharComponent,
    CharactersEntryComponent,
  ],
})
export class FeatureCharactersModule {}
