import { Component } from '@angular/core';
import {ApiService} from "../../../../auth/api/api.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../../auth.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  constructor(
    private apiService: ApiService,
    private router: Router,
    private authService: AuthService,
  ) {}

  clientName : string = 'Prince Petyth';
  clientStatus : string = 'Lead';
  userBirthday : string = '16/08/1996';
  clientPhone : string = '06 02 03 04 05';
  phoneIcon : string = 'fa-solid fa-phone';

  userEmail : string = 'nehligchris@live.fr';
  userRole : string = 'Rôle';

  firstPartAdress : string = '16 rue du Général Sarrail';
  secondPartAdress : string = '76000 Rouen';

  getUserName(): string {
    return this.authService.getUserName();
  }

}
