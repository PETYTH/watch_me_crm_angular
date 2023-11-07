import { NgModule } from '@angular/core';

import { SidebarComponent } from "./sidebar/sidebar.component";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule
  ],
  providers: [],
})
export class SharedModule { }
