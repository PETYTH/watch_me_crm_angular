import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  entrepriseLink : string = '/dashboard/entreprises/add';
  entrepriseView : string = '/dashboard/entreprises/view';
}
