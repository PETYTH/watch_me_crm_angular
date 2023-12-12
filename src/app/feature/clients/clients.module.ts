import { NgModule } from '@angular/core';

import { ClientsRoutingModule } from './clients-routing.module';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {ListComponent} from "./page/list/list.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    ListComponent
  ],
    imports: [
        ClientsRoutingModule,
        RouterModule,
        CommonModule,
        SharedModule,
    ]
})

export class ClientsModule { }
