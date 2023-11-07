import { NgModule } from '@angular/core';

import { EmployesRoutingModule } from './employes-routing.module';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {ListComponent} from "./page/list/list.component";

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    EmployesRoutingModule,
    RouterModule,
    CommonModule,
  ]
})

export class EmployesModule { }
