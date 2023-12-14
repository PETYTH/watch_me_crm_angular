import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  entrepriseLink : string = '/dashboard/entreprises/add';
  entrepriseView : string = '/dashboard/entreprises/view';
  entrepriseEdit : string = '/dashboard/entreprises/edit';

  entrepriseTitre : string = 'Liste des succursales de la société';
  entrepriseSubTitre : string = '';

  dataEntreprises: { [key: string]: string[] } = {
    "row1": ["data 1", "data 2", "data 3", "data 4", "data 5"],
    "row2": ["data 6", "data 7", "data 8"],
    "row3": ["data 9", "data 10", "data 11", "data 12"],
  }
}
