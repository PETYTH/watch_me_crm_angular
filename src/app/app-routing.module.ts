import
{ NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { AuthGuard } from './auth.guard';
import { PageComponent } from './home/copyright/page/page.component';

const routes: Routes = [
  { path: 'page',
    component: PageComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.authModule)

  },

  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),
    canActivate: [AuthGuard]
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
