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

  commandeName : string = 'Montre Garmin';
  clientName : string = 'Prince Petyth';
  commandePrice : string = '150€';
  commandeNumero : string = 'Numéro de commande : 987654321';
  commandeStatus : string = 'En cours de livraison';

  firstPartAdress : string = '16 rue du Général Sarrail';
  secondPartAdress : string = '76000 Rouen';

  getUserName(): string {
    return this.authService.getUserName();
  }

}
