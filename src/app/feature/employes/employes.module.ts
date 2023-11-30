import { NgModule } from '@angular/core';

import { EmployesRoutingModule } from './employes-routing.module';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {ListComponent} from "./page/list/list.component";
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    EmployesRoutingModule,
    RouterModule,
    CommonModule,
    SharedModule,
  ]
})

export class EmployesModule { }
