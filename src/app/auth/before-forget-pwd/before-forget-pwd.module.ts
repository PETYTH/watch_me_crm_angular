import { NgModule } from '@angular/core';

import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormComponent } from './page/form/form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BeforeForgetPwdRoutingModule } from './before-forget-pwd-routing.module';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    FormComponent,

  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    BeforeForgetPwdRoutingModule,
    ReactiveFormsModule,
  ]
})

export class BeforeForgetPwdModule { }
