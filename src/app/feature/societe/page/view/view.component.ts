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

  CompanyName : string = 'NFS';
  FirstPartAdress : string = '16 rue du Général Sarrail';
  SecondPartAdress : string = '76000 Rouen';
  Siret : string = '123-456-789-00011';

  userCA : string = '1000€';

  getUserName(): string {
    return this.authService.getUserName();
  }

}
