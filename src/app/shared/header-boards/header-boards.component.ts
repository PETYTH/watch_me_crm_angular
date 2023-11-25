import { Component } from '@angular/core';

@Component({
  selector: 'app-header-boards',
  templateUrl: './header-boards.component.html',
  styleUrls: ['./header-boards.component.scss']
})
export class HeaderBoardsComponent {
  today: Date = new Date();
  role : string = "Rôle";

  enveloppe : string = "fa-regular fa-envelope";
  bell : string = "fa-regular fa-bell";
  palette : string = "fa-solid fa-palette";
}
