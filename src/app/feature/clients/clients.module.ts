import { NgModule } from '@angular/core';

import { ClientsRoutingModule } from './clients-routing.module';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {ListComponent} from "./page/list/list.component";
import {SharedModule} from "../../shared/shared.module";
import { AddComponent } from './page/add/add.component';
import { EditComponent } from './page/edit/edit.component';
import { ViewComponent } from './page/view/view.component';
import { DeleteComponent } from './page/delete/delete.component';

@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    EditComponent,
    ViewComponent,
    DeleteComponent
  ],
    imports: [
        ClientsRoutingModule,
        RouterModule,
        CommonModule,
        SharedModule,
    ]
})

export class ClientsModule { }
