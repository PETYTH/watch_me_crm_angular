import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./page/list/list.component";
import {ViewComponent} from "./page/view/view.component";
import {EditComponent} from "./page/edit/edit.component";
import {AddComponent} from "./page/add/add.component";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'view/:id',
        component: ViewComponent
      },
      {
        path: 'edit/:id',
        component: EditComponent
      },
      {
        path: 'add',
        component: AddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntreprisesRoutingModule { }
