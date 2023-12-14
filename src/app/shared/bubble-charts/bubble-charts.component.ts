import { Component } from '@angular/core';

@Component({
  selector: 'app-bubble-charts',
  templateUrl: './bubble-charts.component.html',
  styleUrls: ['./bubble-charts.component.scss']
})
export class BubbleChartsComponent {
  chartOptions = {
    title: {
    	text: "Basic Column Chart in Angular"
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "entreprises",  y: 10  },
        { label: "employes", y: 15  },
        { label: "clients", y: 25  },
        { label: "Produits",  y: 30  },
        { label: "Commandes",  y: 28  }
      ]
    }]                
  };
}
