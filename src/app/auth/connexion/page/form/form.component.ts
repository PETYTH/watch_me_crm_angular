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

    if (!emailControl?.value && !passwordControl?.value) {
      this.loginError = 'Veuillez saisir l\'email et le mot de passe';
      return;
    }

    if (!emailControl?.value) {
      this.loginError = 'Veuillez saisir l\'email';
      return;
    }

    if (!passwordControl?.value) {
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
          // Votre logique de traitement réussi de connexion
        },
        (error) => {
          if (error.status === 401) {
            this.loginError = 'Vous n\'avez pas accès à ce compte';
          } else {
            console.error('Échec de la connexion :', error);
            this.loginError = 'Une erreur s\'est produite lors de la connexion';
          }
          // Gestion des autres erreurs si nécessaire
        }
      );
    }
  }

}
