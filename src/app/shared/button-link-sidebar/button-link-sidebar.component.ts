import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-link-sidebar',
  templateUrl: './button-link-sidebar.component.html',
  styleUrls: ['./button-link-sidebar.component.scss']
})
export class ButtonLinkSidebarComponent {
  @Input() icon: string = "fa-solid fa-question";
  @Input() link: string = "";
}
