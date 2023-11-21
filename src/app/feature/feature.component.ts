import {Component} from '@angular/core';


@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent {

  widthSidebar: string = '126px';
  // timeout: number = 300;

  lock = true;
  isSidebarOpen = false;

  icon_title: string = '';

  onMouseEnter(){
    if (!this.lock){
      setTimeout(() => {
        this.widthSidebar = "300px";
      }, 300);
      this.isSidebarOpen = true;
      this.icon_title = 'icon-title';
    }
  }

  onMouseLeave(){
    setTimeout(() => {
      this.widthSidebar = "126px";
    }, 500);
    this.isSidebarOpen = false;
    this.icon_title = 'hide';

  }

  // Méthode appelée lorsque l'événement lockChange est émis par l'enfant
  onLockChange(lock: boolean) {
    this.lock = lock;
  }

  protected readonly closed = closed;
}
