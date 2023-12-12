import { NgModule } from '@angular/core';

import { CommandesRoutingModule } from './commandes-routing.module';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {ListComponent} from "./page/list/list.component";
import { SharedModule } from '../../shared/shared.module';
import { AddComponent } from './page/add/add.component';

@NgModule({
  declarations: [
    ListComponent,
    AddComponent
  ],

  imports: [
    CommandesRoutingModule,
    RouterModule,
    CommonModule,
    SharedModule,
  ]
})

export class CommandesModule { }
