import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {HomeComponent} from "./home.component";
// import { HttpClientModule } from "@angular/common/http";
// import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
  ],
  imports: [
    HomeRoutingModule,
    RouterModule,
    CommonModule,
    // HttpClientModule,
    // SharedModule
  ],
  providers: [],
})
export class HomeModule { }
