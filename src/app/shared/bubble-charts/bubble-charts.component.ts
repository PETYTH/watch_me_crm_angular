import { Component } from '@angular/core';

@Component({
  selector: 'app-bubble-charts',
  templateUrl: './bubble-charts.component.html',
  styleUrls: ['./bubble-charts.component.scss']
})
export class BubbleChartsComponent {

  options: string[] = ["Option 1", "Option 2", "Option 3"]; // Mettez vos options réelles ici
  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
