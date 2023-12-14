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
  userBirthday : string = '16/08/1996';
  userEmail : string = 'nehligchris@live.fr';
  userRole : string = 'Rôle';

  userPhoto : string = '../assets/img/user.png';
  altTexte : string = 'image de l\'utilisateur';

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
    this.getOneEmploye(this.id);
  }

  getUserName(): string {
    return this.authService.getUserName();
  }

  getOneEmploye(id: any) {
    this.apiService.getOneEmploye(id).subscribe(
      (result) => {
        this.userRole = result.employe._status;
      },
    (error) => {
        console.error('Une erreur est survenue')
    }
    )
  }

}
