import { NgModule } from '@angular/core';

import { SocieteRoutingModule } from './societe-routing.module';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {ListComponent} from "./page/list/list.component";
import {SharedModule} from "../../shared/shared.module";
import { AddComponent } from './page/add/add.component';
import { ViewComponent } from './page/view/view.component';

@NgModule({
  declarations: [
  ListComponent,
  AddComponent,
  ViewComponent
  ],
    imports: [
        SocieteRoutingModule,
        RouterModule,
        CommonModule,
        SharedModule,
    ]
})

export class SocieteModule { }
