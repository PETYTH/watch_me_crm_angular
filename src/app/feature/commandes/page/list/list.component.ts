import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  commandeLink = '/dashboard/commandes/add';
  commandeView = '/dashboard/commandes/view';
  commandeEdit = '/dashboard/commandes/edit';

  commandeTitre : string = 'Liste des commandes passées';
  commandeSubTitre : string = '';

  dataCommandes: { [key: string]: string[] } = {
    "row1": ["data 1", "data 2", "data 3", "data 4", "data 5"],
    "row2": ["data 6", "data 7", "data 8"],
    "row3": ["data 9", "data 10", "data 11", "data 12"],
  }
}
