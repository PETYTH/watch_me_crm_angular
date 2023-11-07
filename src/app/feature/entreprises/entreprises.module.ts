import { NgModule } from '@angular/core';

import { EntreprisesRoutingModule } from './entreprises-routing.module';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {ListComponent} from "./page/list/list.component";


@NgModule({
  declarations: [
  ListComponent
  ],
  imports: [
    EntreprisesRoutingModule,
    RouterModule,
    CommonModule,
  ]
})

export class EntreprisesModule { }
