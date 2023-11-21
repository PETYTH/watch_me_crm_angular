import {Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() lockChange = new EventEmitter<boolean>();
  lock = true;
  lockIcon = "fa-solid fa-lock";
  @Input() icon_title : string = "";

  @Input() isSidebarOpen = false;

  lockEvent(){
    this.lock = !this.lock;

    if(this.lock){
      this.lockIcon = "fa-solid fa-lock";
    } else {
      this.lockIcon = "fa-solid fa-lock-open";
    }

    // Émettre l'événement vers le parent
    this.lockChange.emit(this.lock);
  }
}
