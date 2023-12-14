import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../auth/api/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../../auth.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  id: number = 0;
  getEntreprise : string = '';
  userAdresse1 : string = '';
  userAdresse2 : string = '';
  userCA : string = '';
  userSiret : string = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const idFromUrl = params.get('id');
      if (idFromUrl !== null) {
        const parsedId = +idFromUrl;

        if (!isNaN(parsedId)) {
          this.id = parsedId;
        } else {
          console.error('Invalid ID parameter in the URL');
        }
      } else {
        console.error('ID parameter is null or missing in the URL');
      }
    });
    this.getOneEntreprise(this.id);
  }

  getOneEntreprise(id: any) {
    this.apiService.getOneEntreprise(id).subscribe(
      (result) => {
        this.getEntreprise = result.entreprise.nom;
        this.userAdresse1 = result.entreprise.adresse;
        this.userCA = result.entreprise.chiffre_affaire;
        this.userSiret = result.entreprise.numero_siret;
      },
      (error) => {
        console.error('Une erreur est survenue')
      }
    )
  }

}
