import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiCharactersModule } from './ui-characters/ui-characters.module';
import { FeatureCharactersModule } from './feature-characters/feature-characters.module';
import { FeatureLayoutModule } from './feature-layout/feature-layout.module';
import { FormlyModule } from '@ngx-formly/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './_services/http-interceptors';
import { UiUtilModule } from './ui-util/ui-util.module';
import { FeatureSessionModule } from './feature-session/feature-session.module';
import { MatCardModule } from '@angular/material/card';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { UiSessionModule } from './ui-session/ui-session.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiCharactersModule,
    FeatureCharactersModule,
    FeatureLayoutModule,
    HttpClientModule,
    UiUtilModule,
    UiSessionModule,
    FeatureSessionModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    FormlyMaterialModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
