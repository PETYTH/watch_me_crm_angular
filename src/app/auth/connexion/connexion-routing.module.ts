import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './page/form/form.component';
import { AuthGuard } from '../../auth.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'form',
        component: FormComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnexionRoutingModule { }
