import { NgModule } from '@angular/core';

import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './forget-pwd/page/form/form.component';

@NgModule({
  declarations: [
    AuthComponent,
    FormComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    AuthRoutingModule,
    SharedModule,
  ],
  providers: [],
})
export class authModule { }
