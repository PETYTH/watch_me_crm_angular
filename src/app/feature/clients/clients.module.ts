import { NgModule } from '@angular/core';

import { ClientsRoutingModule } from './clients-routing.module';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {ListComponent} from "./page/list/list.component";

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    ClientsRoutingModule,
    RouterModule,
    CommonModule,
  ]
})

export class ClientsModule { }
