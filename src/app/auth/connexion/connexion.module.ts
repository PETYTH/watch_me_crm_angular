import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormComponent } from './page/form/form.component';
import { ConnexionRoutingModule } from './connexion-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    FormComponent,
  ],
  imports: [
    ConnexionRoutingModule,
    RouterModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})

export class ConnexionModule { }
