import { Component } from '@angular/core';

// declare var require: any;
// var CanvasJS = require('../assets/canvasjs.min.js');
 
// CanvasJS.addColorSet("customColorSet",["#ffcb06", "#ce1249", "#3a943c", "#7f3e83", "#812900", "#2078b6", "#df7f2e", "#e3e3e3"]);

@Component({
  selector: 'app-bubble-charts',
  templateUrl: './bubble-charts.component.html',
  styleUrls: ['./bubble-charts.component.scss']
})
export class BubbleChartsComponent {
  chartOptions = {
    animationEnabled: true,
    theme: "dark2",
    colorSet: "customColorSet",
    title:{
      text: "Vue d'enssemble"
    },
    data: [{
      type: "doughnut",
      indexLabel: "{name}: {y}",
      innerRadius: "85%",
      yValueFormatString: "#,##0.00'%'",
      dataPoints: [
      { y: 33, name: "Commandes" },
      { y: 25, name: "Clients" },
      { y: 20, name: "Employes" },
      { y: 15, name: "Entreprise" },
      ]
    }]
    }
}
