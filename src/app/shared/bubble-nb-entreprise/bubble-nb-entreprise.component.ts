import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../auth/api/api.service";

@Component({
  selector: 'app-bubble-nb-entreprise',
  templateUrl: './bubble-nb-entreprise.component.html',
  styleUrls: ['./bubble-nb-entreprise.component.scss']
})
export class BubbleNbEntrepriseComponent implements OnInit {
  nombreTotalEntreprises: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.countEntreprises();
  }

  countEntreprises() {
    this.apiService.countEntreprises().subscribe(
      (result) => {
        this.nombreTotalEntreprises = result.nombreTotalEntreprises;
      },
    (error) => {
        console.error('Une erreur est survenue');
    }
    )
  }
}
