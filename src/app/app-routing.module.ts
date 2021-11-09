import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDashboardComponent } from './feature-characters/dashboard/dashboard.component';
import { CharacterDetailComponent } from './feature-characters/detail/detail.component';
import { CharactersEntryComponent } from './feature-characters/entry/entry.component';
import { NewCharComponent } from './feature-characters/new/new.component';

const routes: Routes = [
  {
    path: 'characters',
    loadChildren: () =>
      import('./feature-characters/feature-characters.module').then(
        (m) => m.FeatureCharactersModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
