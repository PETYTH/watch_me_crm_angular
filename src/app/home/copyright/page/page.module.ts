import { NgModule } from '@angular/core';

import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { PageComponent } from './page.component';



@NgModule({
  declarations: [
    PageComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
})
export class PageModule { }
