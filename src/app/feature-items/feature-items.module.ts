import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NewComponent } from './new/new.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
import { FormlyMatSelectModule } from '@ngx-formly/material/select';
import { AddItemComponent } from './add-item/add-item.component';
@NgModule({
  declarations: [OverviewComponent, NewComponent, AddItemComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    FormlyModule,
    FormlyMaterialModule,
    ReactiveFormsModule,
    FormlyMatToggleModule,
    FormlyMatSelectModule,
    RouterModule.forChild([
      {
        path: '',
        component: OverviewComponent,
      },
    ]),
  ],
  exports: [NewComponent],
})
export class FeatureItemsModule {}
