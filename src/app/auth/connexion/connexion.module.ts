import { NgModule } from '@angular/core';

import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormComponent } from './page/form/form.component';
import { ConnexionRoutingModule } from './connexion-routing.module';

@NgModule({
  declarations: [
    FormComponent,
  ],
  imports: [
    ConnexionRoutingModule,
    RouterModule,
    CommonModule,
  ]
})

export class ConnexionModule { }
