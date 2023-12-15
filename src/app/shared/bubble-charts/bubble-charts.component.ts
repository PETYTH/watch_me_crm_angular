import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../auth/api/api.service';
import { Chart, ChartType } from 'chart.js/auto';
import { AuthService } from '../../auth.service'; // Assurez-vous que le chemin est correct

@Component({
    selector: 'app-bubble-charts',
    templateUrl: './bubble-charts.component.html',
    styleUrls: ['./bubble-charts.component.scss']
})
export class BubbleChartsComponent implements OnInit {
    entrepriseId: number | undefined;
    selectedChartType: ChartType = 'doughnut';
    chartTypes: ChartType[] = ['bar', 'line', 'radar', 'scatter', 'bubble', 'pie', 'doughnut', 'polarArea'];
    clientsData: any = { labels: [], values: [] }; // Modification de la structure des données
    chart: Chart | null = null;
    entreprises: any[] = []; // Liste des entreprises

    constructor(
        private apiService: ApiService,
        private authService: AuthService // Injectez le service d'authentification
    ) { }

    ngOnInit(): void {
        this.loadEntreprises(); // Charger la liste des entreprises au chargement du composant
    }

    loadEntreprises(): void {
        // Récupérer le token JWT depuis le service d'authentification
        const token = this.authService.getToken();

        // Vérifier si le token JWT est disponible
        if (token) {
            this.apiService.getAllEntreprises().subscribe(
                (response) => {
                    this.entreprises = response; // Stocker les entreprises récupérées
                },
                (error) => {
                    console.error(error);
                }
            );
        } else {
            console.error('JWT Token not found'); // Gérer le cas où le token n'est pas disponible
        }
    }

  onEntrepriseSelect(): void {
    if (this.entrepriseId) {
      const token = this.authService.getToken();

      if (token) {
        const headers = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        this.apiService.count_clients_entreprise(this.entrepriseId, headers).subscribe(
          (response: any) => {
            const countsByStatus = response.countsByStatus;
            if (Array.isArray(countsByStatus) && countsByStatus.length > 0) {
              const firstData = countsByStatus[0]; // Prendre le premier élément du tableau
              const twoData = countsByStatus[1]; // Prendre le premier élément du tableau
              const threeData = countsByStatus[2]; // Prendre le premier élément du tableau
              const fourData = countsByStatus[3]; // Prendre le premier élément du tableau
              console.log(firstData);
              console.log(twoData);
              console.log(threeData);
              console.log(fourData);

              const labels = countsByStatus.map((item: any) => item.status);
              const values = countsByStatus.map((item: any) => item.count);

              this.clientsData = {
                labels: labels,
                values: values
              };

              this.updateChart();
            } else {
              console.error('Invalid data format or empty countsByStatus array');
            }
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        console.error('JWT Token not found');
      }
    }
  }


  updateChart(): void {
    if (this.chart) {
      this.chart.destroy();
    }

    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      const backgroundColors = ['red', 'orange', 'blue', 'green']; // Couleurs spécifiées

      this.chart = new Chart(ctx, {
        type: this.selectedChartType,
        data: {
          labels: this.clientsData.labels,
          datasets: [{
            data: this.clientsData.values,
            backgroundColor: backgroundColors
          }]
        },
        options: {
          responsive: true,
        }
      });
    }
  }



  onChartTypeSelect(event: Event): void {
        const selectedType = (event.target as HTMLSelectElement).value as ChartType;
        this.selectedChartType = selectedType;
        this.updateChart();
    }
}
