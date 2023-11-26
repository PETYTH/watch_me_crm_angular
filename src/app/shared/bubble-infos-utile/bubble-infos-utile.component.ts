import { Component } from '@angular/core';

@Component({
  selector: 'app-bubble-infos-utile',
  templateUrl: './bubble-infos-utile.component.html',
  styleUrls: ['./bubble-infos-utile.component.scss']
})
export class BubbleInfosUtileComponent {

  options: string[] = ["Option 1", "Option 2", "Option 3"]; // Mettez vos options réelles ici
  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
