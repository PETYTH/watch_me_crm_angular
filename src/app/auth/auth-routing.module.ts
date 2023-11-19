import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'connexion',
        loadChildren: () => import('./connexion/connexion.module').then(m => m.ConnexionModule)
      },

      {
        path: 'first-co',
        loadChildren: () => import('./first-connexion/first-connexion.module').then(m => m.FirstConnexionModule)
      },

      {
        path: 'forget',
        loadChildren: () => import('./forget-pwd/forget-pwd.module').then(m => m.ForgetModule)
      },

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
