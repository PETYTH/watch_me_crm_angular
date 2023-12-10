import { Component } from '@angular/core';
import {ApiService} from "../../auth/api/api.service";
import {Router} from "@angular/router";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-bubble-infos-employe',
  templateUrl: './bubble-infos-employe.component.html',
  styleUrls: ['./bubble-infos-employe.component.scss']
})
export class BubbleInfosEmployeComponent {

  constructor(
    private apiService: ApiService,
    private router: Router,
    private authService: AuthService,
  ) {}

  userPhoto : string = '../assets/img/user.png';


  getUserName(): string {
    return this.authService.getUserName();
  }
}
