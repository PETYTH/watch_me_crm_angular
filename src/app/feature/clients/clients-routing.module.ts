import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./page/list/list.component";
import {AddComponent} from "./page/add/add.component";
import {EditComponent} from "./page/edit/edit.component";
import {ViewComponent} from "./page/view/view.component";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'edit',
        component: EditComponent
      },
      {
        path: 'view',
        component: ViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
