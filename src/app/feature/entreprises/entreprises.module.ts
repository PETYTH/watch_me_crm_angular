import { NgModule } from '@angular/core';

import { EntreprisesRoutingModule } from './entreprises-routing.module';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {ListComponent} from "./page/list/list.component";
import { ViewComponent } from './page/view/view.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
  ListComponent,
  ViewComponent
  ],
    imports: [
        EntreprisesRoutingModule,
        RouterModule,
        CommonModule,
        SharedModule,
    ]
})

export class EntreprisesModule { }
