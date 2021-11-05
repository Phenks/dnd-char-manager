import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDashboardComponent } from './feature-characters/dashboard/dashboard.component';
import { CharacterDetailComponent } from './feature-characters/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterDashboardComponent,
  },
  {
    path: 'characters/:id',
    component: CharacterDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
