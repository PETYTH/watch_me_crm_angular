import { NgModule } from '@angular/core';

import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormComponent } from './page/form/form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FirstConnexionRoutingModule } from './first-connexion-routing.module';

@NgModule({
  declarations: [
    FormComponent,
  ],
  imports: [
    FirstConnexionRoutingModule,
    RouterModule,
    CommonModule,
    SharedModule,
  ]
})

export class FirstConnexionModule { }
