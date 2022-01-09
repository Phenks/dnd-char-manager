import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { UiUtilModule } from '../ui-util/ui-util.module';
import { NewSessionComponent } from './new-session/new-session.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [OverviewComponent, NewSessionComponent],
  imports: [
    CommonModule,
    UiUtilModule,
    FormlyModule,
    FormlyMaterialModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: OverviewComponent,
      },
    ]),
  ],
})
export class FeatureSessionModule {}
