import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bubble-list',
  templateUrl: './bubble-list.component.html',
  styleUrls: ['./bubble-list.component.scss'],

})
export class BubbleListComponent {

  pages: number = 1;
  dataset: any[] = ['1','2','3','4'];

  @Input() addLink : string = '';
  @Input() viewLink : string = '';
  @Input() editLink : string = '';
  @Input() id : number = 0;
  @Input() tableData : { [key: string]: string[] } = {};

  modifIcon : string = "fa-solid fa-pen";
  deleteIcon : string = "fa-solid fa-trash";

  get tableHeaders(): string[] {
    return Object.keys(this.tableData);
  }

  get tableRows(): string[][] {
    // Trouver le nombre maximal de valeurs dans toutes les lignes
    const maxValues = Math.max(...Object.values(this.tableData).map(row => row.length));
    // Générer les colonnes en utilisant le nombre maximal de valeurs
    const transposedData: string[][] = [];
    for (let i = 0; i < maxValues; i++) {
      const newRow: string[] = [];
      for (let j = 0; j < this.tableHeaders.length; j++) {
        const key = this.tableHeaders[j];
        // Vérifier si la valeur existe avant de l'ajouter
        if (i < this.tableData[key].length) {
          newRow.push(this.tableData[key][i]);
        } else {
          newRow.push(""); // Ajouter une chaîne vide si la valeur n'existe pas
        }
      }
      transposedData.push(newRow);
    }
    return transposedData;
  }
}
