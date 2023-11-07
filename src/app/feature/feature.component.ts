import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent {

  widthSidebar: string = '126px';
  // timeout: number = 300;

  onMouseEnter(){
    setTimeout(() => {
      this.widthSidebar = "300px";
    }, 300)
  }

  onMouseLeave(){
    setTimeout(() => {
      this.widthSidebar = "126px";
    }, 500);
  }
}
