import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FeatureModule} from "./feature/feature.module";
import {SharedModule} from "./shared/shared.module";
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { HomeComponent } from './home/home.component';
import {HomeModule} from "./home/home.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    SharedModule,
    HomeModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
