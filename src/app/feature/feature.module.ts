import { NgModule } from '@angular/core';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from "./feature.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    FeatureComponent,
  ],
  imports: [
    FeatureRoutingModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
})
export class FeatureModule { }
