import {Component, EventEmitter, Output, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../auth/api/api.service';
import {HttpHeaders} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent{
  @Output() lockChange = new EventEmitter<boolean>();
  lock = true;
  lockIcon = "fa-solid fa-lock";
  constructor(
      private apiService: ApiService,
      private router: Router,
      private authService: AuthService,
  ) {}


  @Input() isSidebarOpen : boolean = false;

  lockEvent(){
    this.lock = !this.lock;

    if(this.lock){
      this.lockIcon = "fa-solid fa-lock";
    } else {
      this.lockIcon = "fa-solid fa-lock-open";
    }

    this.lockChange.emit(this.lock);
  }

  // info connexion red or green
  isUserOnline = true;

  logEvent(){
    this.isUserOnline = !this.isUserOnline;
  }


  getUserName(): string {
    return this.authService.getUserName();
  }

    logoutUser(): void {
        // Créer les en-têtes nécessaires
        const headers = new HttpHeaders({
            'Authorization': 'Bearer ' + sessionStorage.getItem('userToken'),
            'Content-Type': 'application/json',
        });

        // Appeler la méthode logoutUser avec les en-têtes
        this.apiService.logoutUser(headers).subscribe(
            () => {
                console.log('Déconnexion réussie');
                this.authService.logout();
              //  this.router.navigate(['/auth/connexion/form']);
              //  localStorage.removeItem('access_token');
            },
            (error) => {
                console.error('Erreur lors de la déconnexion :', error);
                // Gérez l'erreur en conséquence
            }
        );
    }




}
