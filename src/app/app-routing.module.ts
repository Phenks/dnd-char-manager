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
  {
    path: 'sessions',
    loadChildren: () =>
      import('./feature-session/feature-session.module').then(
        (m) => m.FeatureSessionModule
      ),
  },
  {
    path: 'items',
    loadChildren: () =>
      import('./feature-items/feature-items.module').then(
        (m) => m.FeatureItemsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
