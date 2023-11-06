import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from "./feature.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    FeatureComponent
  ],
  imports: [
    FeatureRoutingModule,
    RouterModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
})
export class FeatureModule { }
