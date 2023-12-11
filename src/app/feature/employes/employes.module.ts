import { NgModule } from '@angular/core';

import { EmployesRoutingModule } from './employes-routing.module';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {ListComponent} from "./page/list/list.component";
import { SharedModule } from '../../shared/shared.module';
import { AddComponent } from './page/add/add.component';
import { EditComponent } from './page/edit/edit.component';

@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    EmployesRoutingModule,
    RouterModule,
    CommonModule,
    SharedModule,
  ]
})

export class EmployesModule { }
