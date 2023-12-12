import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  clientLink : string = '/dashboard/clients/add';
  clientView : string = '/dashboard/clients/view';
}
