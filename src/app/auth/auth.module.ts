import { NgModule } from '@angular/core';

import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    AuthRoutingModule,
  ],
  providers: [],
})
export class authModule { }
