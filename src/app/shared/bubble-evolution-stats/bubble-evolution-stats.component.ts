import { Component } from '@angular/core';

@Component({
  selector: 'app-bubble-evolution-stats',
  templateUrl: './bubble-evolution-stats.component.html',
  styleUrls: ['./bubble-evolution-stats.component.scss']
})
export class BubbleEvolutionStatsComponent {

  modifIcon : string = "fa-solid fa-pen";
  deleteIcon : string = "fa-solid fa-trash";

  options: string[] = ["Option 1", "Option 2", "Option 3"]; // Mettez vos options réelles ici
  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  tableData: { [key: string]: string[] } = {
    "row1": ["data 1", "data 2", "data 3", "data 4", "data 5"],
    "row2": ["data 6", "data 7", "data 8"],
    "row3": ["data 9", "data 10", "data 11", "data 12"],
  }

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
