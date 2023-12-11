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

  userBirthday : string = '16/08/1996';
  userEmail : string = 'nehligchris@live.fr';
  userRole : string = 'Rôle';

  userPhoto : string = '../assets/img/user.png';
  altTexte : string = 'image de l\'utilisateur';

  getUserName(): string {
    return this.authService.getUserName();
  }

}
