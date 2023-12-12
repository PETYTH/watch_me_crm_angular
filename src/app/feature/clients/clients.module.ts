import { NgModule } from '@angular/core';

import { ClientsRoutingModule } from './clients-routing.module';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {ListComponent} from "./page/list/list.component";
import {SharedModule} from "../../shared/shared.module";
import { AddComponent } from './page/add/add.component';

@NgModule({
  declarations: [
    ListComponent,
    AddComponent
  ],
    imports: [
        ClientsRoutingModule,
        RouterModule,
        CommonModule,
        SharedModule,
    ]
})

export class ClientsModule { }
