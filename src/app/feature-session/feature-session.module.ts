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
import { UiSessionModule } from '../ui-session/ui-session.module';
import { DetailComponent } from './detail/detail.component';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  declarations: [OverviewComponent, NewSessionComponent, DetailComponent],
  imports: [
    CommonModule,
    UiUtilModule,
    FormlyModule,
    FormlyMaterialModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    UiSessionModule,
    MatDividerModule,
    RouterModule.forChild([
      {
        path: '',
        component: OverviewComponent,
      },

      {
        path: ':id',
        component: DetailComponent,
      },
    ]),
  ],
})
export class FeatureSessionModule {}
