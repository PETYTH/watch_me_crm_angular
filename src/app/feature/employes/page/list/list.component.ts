import {Component, NgZone, OnInit} from '@angular/core';
import {ApiService} from "../../../../auth/api/api.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],

})
export class ListComponent implements OnInit {
  employeLink : string = '/dashboard/employes/add';
  employeView : string = '/dashboard/employes/view';
  employeEdit : string = '/dashboard/employes/edit';
  employeDelete : string = '/dashboard/employes/delete';
  id: number[] = [];

  employeTitre : string = 'Liste des employés';
  employeSubTitre : string = '';

  dataEmployes: { [key: string]: string[] } = {
    "Nom" : [],
    "Prénom" : [],
    "Email" : [],
    "Date de naissance" : [],
    "Statut" : [],
  }

  constructor(private apiService: ApiService, private zone: NgZone) {
    this.dataEmployes["Nom"] = [];
    this.dataEmployes["Prénom"] = [];
    this.dataEmployes["Email"] = [];
    this.dataEmployes["Date de naissance"] = [];
    this.dataEmployes["Statut"] = [];
  }

  ngOnInit() {
    this.getAllEmployes();
  }

  getAllEmployes() {
    this.apiService.getAllUsers().subscribe(
      (result: any) => {

        if (Array.isArray(result.users)) {
          // Vous pouvez remplacer le code ci-dessous par la logique appropriée
          this.zone.run(() => {
            result.users.forEach((employe: any) => {
              this.id = employe.id;
              this.dataEmployes["Nom"].push(employe.name);
              this.dataEmployes["Prénom"].push(employe.firstname);
              this.dataEmployes["Email"].push(employe.email);
              this.dataEmployes["Date de naissance"].push(employe.birthday);
              this.dataEmployes["Statut"].push(employe.roles);
              // Ajoutez d'autres propriétés selon vos besoins
            });
          });
        } else {
          console.error('Le résultat ne contient pas un tableau d\'utilisateurs.');
        }
      },
      (error) => {
        console.error('Une erreur est survenue');
      }
    );
  }

}
