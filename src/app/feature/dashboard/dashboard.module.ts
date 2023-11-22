import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {HomeComponent} from "./page/home/home.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        DashboardRoutingModule,
        RouterModule,
        CommonModule,
        SharedModule,
    ]
})

export class DashboardModule { }
