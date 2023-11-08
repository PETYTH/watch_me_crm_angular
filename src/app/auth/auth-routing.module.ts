import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      // {
      //   path: '',
      //   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      // },

      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },

      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
