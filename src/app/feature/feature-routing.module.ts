import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeatureComponent} from "./feature.component";

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },

      {
        path: 'clients',
        loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
      },

      {
        path: 'commandes',
        loadChildren: () => import('./commandes/commandes.module').then(m => m.CommandesModule)
      },

      {
        path: 'employes',
        loadChildren: () => import('./employes/employes.module').then(m => m.EmployesModule)
      },

      {
        path: 'entreprises',
        loadChildren: () => import('./entreprises/entreprises.module').then(m => m.EntreprisesModule)
      },

      {
        path: 'societe',
        loadChildren: () => import('./societe/societe.module').then(m => m.SocieteModule)
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
export class FeatureRoutingModule { }
