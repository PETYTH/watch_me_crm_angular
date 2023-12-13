import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { PageComponent } from './copyright/page/page.component';



@NgModule({
  declarations: [
    HomeComponent,
    PageComponent,
  ],
  imports: [
    HomeRoutingModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
})
export class HomeModule { }
