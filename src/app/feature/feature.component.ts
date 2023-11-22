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

  onMouseEnter(){
    if (!this.lock){
      setTimeout(() => {
        this.widthSidebar = "300px";
        this.isSidebarOpen = true;
      }, 300);
    }
  }

  onMouseLeave(){
    setTimeout(() => {
      this.widthSidebar = "126px";
      this.isSidebarOpen = false;
    }, 500);
  }

  // Méthode appelée lorsque l'événement lockChange est émis par l'enfant
  onLockChange(lock: boolean) {
    this.lock = lock;
  }

  protected readonly closed = closed;
}
