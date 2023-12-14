import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../auth/api/api.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  entrepriseLink : string = '/dashboard/entreprises/add';
  entrepriseView : string = '/dashboard/entreprises/view';
  entrepriseEdit : string = '/dashboard/entreprises/edit';
  entrepriseDelete : string = '/dashboard/entreprises/delete';
  id: number[] = [];
  entreprises: any[] = [];
  entrepriseTitre : string = 'Liste des succursales de la société';
  entrepriseSubTitre : string = '';
  dataEntreprises: { [key: string]: string[] } = {
    "Nom" : [],
    "Siret" : [],
    "Adresse" : [],
    "Code Postal" : [],
    "Ville" : [],
    "Chiffre d'affaire" : []
  }


  constructor(private apiService: ApiService,) {}

  ngOnInit() {
    this.getAllEntreprises()
    console.log('Data Entreprises après getAllEntreprises : ', this.dataEntreprises);
  }

  getAllEntreprises() {
    this.apiService.getAllEntreprises().subscribe(
      (result: any[]) => {
        this.id = result.map(entreprise => entreprise.id);
        this.dataEntreprises["Nom"] = result.map(entreprise => entreprise.nom);
        this.dataEntreprises["Siret"] = result.map(entreprise => entreprise.numero_siret);
        this.dataEntreprises["Adresse"] = result.map(entreprise => entreprise.adresse);
        this.dataEntreprises["Code Postal"] = result.map(entreprise => entreprise.code_postal);
        this.dataEntreprises["Ville"] = result.map(entreprise => entreprise.ville);
        this.dataEntreprises["Chiffre d'affaire"] = result.map(entreprise => entreprise.chiffre_affaire);
      },
      (error) => {
        console.error('Une erreur est survenue');
      }
    );
  }

}
