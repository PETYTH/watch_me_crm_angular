import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FeatureModule} from "./feature/feature.module";
import {SharedModule} from "./shared/shared.module";
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import {PageComponent} from "./home/copyright/page/page.component";
=======
import { NgxPaginationModule } from 'ngx-pagination';
>>>>>>> 6d6a822526348e96c3d9d8120a48c0fa167b1e5b


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FeatureModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule,
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
