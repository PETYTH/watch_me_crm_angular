import {Component, OnInit} from '@angular/core';
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
    "Status" : []
  }

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllEmployes();
  }

  getAllEmployes() {
    this.apiService.getAllEmployes().subscribe(
      (result: any[]) => {
        this.id = result.map(employe => employe.id);
        this.dataEmployes["Status"] = result.map(employe => employe._status);
      },
      (error) => {
        console.error('Une erreur est survenue');
      }
    )
  }

}
