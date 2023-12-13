import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../auth/api/api.service';

@Component({
  selector: 'app-bubble-nb-employes',
  templateUrl: './bubble-nb-employes.component.html',
  styleUrls: ['./bubble-nb-employes.component.scss']
})
export class BubbleNbEmployesComponent implements OnInit {
  nombreTotalEmployes: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.countEmployes();
  }

  countEmployes() {
    this.apiService.countEmployes().subscribe(
      (result) => {
        this.nombreTotalEmployes = result.nombreTotalEmployes;
      },
      (error) => {
        console.error('Une erreur est survenue');
      }
    );
  }
}
