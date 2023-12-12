import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-header-boards',
  templateUrl: './header-boards.component.html',
  styleUrls: ['./header-boards.component.scss']
})
export class HeaderBoardsComponent {
  today: Date = new Date();
  enveloppe: string = "fa-regular fa-envelope";
  bell: string = "fa-regular fa-bell";
  palette: string = "fa-solid fa-palette";

  constructor(private authService: AuthService) {}

  getUserRole(): string {
    return this.authService.getUserRole();
  }
}
