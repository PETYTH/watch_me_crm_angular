import { NgModule } from '@angular/core';

import { CommandesRoutingModule } from './commandes-routing.module';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {ListComponent} from "./page/list/list.component";

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommandesRoutingModule,
    RouterModule,
    CommonModule,
  ]
})

export class CommandesModule { }
