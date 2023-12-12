import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./page/list/list.component";
import {ViewComponent} from "./page/view/view.component";
import { AddComponent } from './page/add/add.component';
import { EditComponent } from './page/edit/edit.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListComponent
      },

      {
        path: 'view',
        component: ViewComponent
      },

      {
        path: 'add',
        component: AddComponent
      },
      
      {
        path: 'edit',
        component: EditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployesRoutingModule { }
