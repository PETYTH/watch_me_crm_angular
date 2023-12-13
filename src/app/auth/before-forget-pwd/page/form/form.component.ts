import { Component } from '@angular/core';
import { ApiService } from '../../../api/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  credentialsForm: FormGroup;
  forgotPasswordError: string | undefined;
  emailSent: boolean = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.credentialsForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  forgotPassword(event: Event): void {
    event.preventDefault();

    const emailControl = this.credentialsForm.get('email');

    if (!emailControl?.value) {
      this.forgotPasswordError = 'Veuillez saisir votre adresse email pour réinitialiser votre mot de passe.';
      return;
    }

    if (emailControl && emailControl.valid) {
      const userData = {
        email: emailControl.value
      };

      this.apiService.forgotPassword(userData).subscribe(
        (response: any) => {
          console.log('Réponse de la demande de réinitialisation du mot de passe :', response);
          if (response.success) {
            this.emailSent = true;
            setTimeout(() => {
              this.router.navigate(['/']);
            }, 5000);
          } else {
            this.forgotPasswordError = response.message || 'Erreur lors de la demande de réinitialisation du mot de passe.';
          }
        },
        (error) => {
          console.error('Échec de la demande de réinitialisation du mot de passe :', error);
          if (error.status === 0) {
            this.forgotPasswordError = 'La connexion à l\'API a été rompue';
          } else if (error.status === 401) {
            this.forgotPasswordError = 'Vous n\'avez pas accès à ce compte';
          } else {
            this.forgotPasswordError = error.error.message || 'Une erreur s\'est produite lors de la demande de réinitialisation du mot de passe.';
          }
        }
      );
    }
  }
}
