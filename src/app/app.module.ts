import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiCharactersModule } from './ui-characters/ui-characters.module';
import { FeatureCharactersModule } from './feature-characters/feature-characters.module';
import { FeatureLayoutModule } from './feature-layout/feature-layout.module';
import { FormlyModule } from '@ngx-formly/core';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiCharactersModule,
    FeatureCharactersModule,
    FeatureLayoutModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
