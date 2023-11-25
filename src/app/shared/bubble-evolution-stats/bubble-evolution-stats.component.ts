import { Component } from '@angular/core';

@Component({
  selector: 'app-bubble-evolution-stats',
  templateUrl: './bubble-evolution-stats.component.html',
  styleUrls: ['./bubble-evolution-stats.component.scss']
})
export class BubbleEvolutionStatsComponent {

  tableData: { [key: string]: string[] } = {
    "row1": ["data 1", "data 2", "data 3", "data 4", "data 5"],
    "row2": ["data 6", "data 7", "data 8"],
    "Actions": ["modif", "supprimer"],
    // Ajoutez d'autres lignes au besoin
  };

  get tableHeaders(): string[] {
    return Object.keys(this.tableData);
  }

  get tableRows(): string[][] {
    const numRows = this.tableHeaders.length;
    const numCols = this.tableData[this.tableHeaders[0]].length;

    const transposedData: string[][] = [];
    for (let i = 0; i < numCols; i++) {
      const newRow: string[] = [];
      for (let j = 0; j < numRows; j++) {
        const key = this.tableHeaders[j];
        if (key === "Actions") {
          // Répéter les valeurs de la clé "Actions"
          const actionsValues = this.tableData["Actions"];
          newRow.push(actionsValues[i % actionsValues.length]);
        } else {
          newRow.push(this.tableData[key][i]);
        }
      }
      transposedData.push(newRow);
    }
    return transposedData;
  }
}
