import { NgModule } from '@angular/core';

import { SidebarComponent } from "./sidebar/sidebar.component";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterModule} from "@angular/router";
import { HeaderBoardsComponent } from './header-boards/header-boards.component';
import { ButtonLinkSidebarComponent } from './button-link-sidebar/button-link-sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderBoardsComponent,
    ButtonLinkSidebarComponent
  ],
  exports: [
    SidebarComponent,
    HeaderBoardsComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule
  ],
  providers: [],
})
export class SharedModule { }
