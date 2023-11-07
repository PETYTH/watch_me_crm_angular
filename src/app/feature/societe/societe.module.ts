import { NgModule } from '@angular/core';

import { SocieteRoutingModule } from './societe-routing.module';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {ListComponent} from "./page/list/list.component";

@NgModule({
  declarations: [
  ListComponent
  ],
  imports: [
    SocieteRoutingModule,
    RouterModule,
    CommonModule,
  ]
})

export class SocieteModule { }
