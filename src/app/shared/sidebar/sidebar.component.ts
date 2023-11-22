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

  @Input() isSidebarOpen : boolean = false;

  lockEvent(){
    this.lock = !this.lock;
    
    if(this.lock){
      this.lockIcon = "fa-solid fa-lock";
    } else {
      this.lockIcon = "fa-solid fa-lock-open";
    }
    
    this.lockChange.emit(this.lock);
  }
  
  // info connexion red or green
  isUserOnline = true;

  logEvent(){
    this.isUserOnline = !this.isUserOnline;
  }

}