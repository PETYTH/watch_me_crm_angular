import { NgModule } from '@angular/core';

import { SocieteRoutingModule } from './societe-routing.module';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {ListComponent} from "./page/list/list.component";
import {SharedModule} from "../../shared/shared.module";
import { AddComponent } from './page/add/add.component';
import { ViewComponent } from './page/view/view.component';
import { EditComponent } from './page/edit/edit.component';

@NgModule({
  declarations: [
  ListComponent,
  AddComponent,
  ViewComponent,
  EditComponent
  ],
    imports: [
        SocieteRoutingModule,
        RouterModule,
        CommonModule,
        SharedModule,
    ]
})

export class SocieteModule { }
