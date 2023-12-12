import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  societeLink : string = '/dashboard/societe/add';
  societeView : string = '/dashboard/societe/view';
}
