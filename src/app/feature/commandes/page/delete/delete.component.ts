import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../auth/api/api.service";
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  id : number = 0;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
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
    this.deleteCommandes(this.id)
  }

  deleteCommandes(id: any) {
    this.apiService.deleteEmploye(id).subscribe(
      (result) => {
        this.router.navigate(['/dashboard/commandes/list']);
      },
      (error) => {
        console.error('Une erreur est survenue');
      }
    )
  }
}
