import { NgModule } from '@angular/core';

import { SidebarComponent } from "./sidebar/sidebar.component";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterModule} from "@angular/router";
import { HeaderBoardsComponent } from './header-boards/header-boards.component';
import { ButtonLinkSidebarComponent } from './button-link-sidebar/button-link-sidebar.component';
import { IconFormComponent } from './icon-form/icon-form.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderBoardsComponent,
    ButtonLinkSidebarComponent,
    IconFormComponent,
  ],
  exports: [
    SidebarComponent,
    HeaderBoardsComponent,
    IconFormComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule
  ],
  providers: [],
})
export class SharedModule { }
