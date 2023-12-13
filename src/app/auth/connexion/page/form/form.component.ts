import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../api/api.service';
import { AuthService } from '../../../../auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  credentialsForm: FormGroup;
  loginError: string | undefined;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) {
    this.credentialsForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  loginUser(): void {
    const emailControl = this.credentialsForm.get('email');
    const passwordControl = this.credentialsForm.get('password');

    if (!emailControl?.value && passwordControl?.valid) {
      // Affichage d'un message d'erreur si seul le mot de passe est saisi
      this.loginError = 'Veuillez saisir l\'email';
      return;
    }

    if (!passwordControl?.value && emailControl?.valid) {
      // Affichage d'un message d'erreur si seul l'email est saisi
      this.loginError = 'Veuillez saisir le mot de passe';
      return;
    }

    if (emailControl && passwordControl && emailControl.valid && passwordControl.valid) {
      const credentials = {
        username: emailControl.value,
        password: passwordControl.value,
      };

      this.apiService.loginUser(credentials).subscribe(
        (response) => {
          console.log('Connexion réussie :', response);
          // Récupérer le premier élément du tableau de rôles
          const role = response.roles && response.roles.length > 0 ? response.roles[0] : '';
          // Obtenez la date d'expiration du token (ici, j'ajoute une heure à la date actuelle)
          const tokenExpiry = new Date();
          tokenExpiry.setHours(tokenExpiry.getHours() + 1);

          // Utilisation de la méthode login de AuthService pour gérer la connexion et la déconnexion automatique
          this.authService.login(response.token, response.lastName, response.firstName, role, tokenExpiry);

          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Échec de la connexion :', error);

          if (error.status === 0) {
            this.loginError = 'La connexion à l\'API a été rompue';
          } else if (error.status === 401) {
            this.loginError = 'Vous n\'avez pas accès à ce compte';
          } else {
            this.loginError = error.error.message;
          }
        }
      );
    }
  }
}
