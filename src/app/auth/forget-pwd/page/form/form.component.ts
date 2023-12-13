import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  resetPasswordForm: FormGroup;
  resetPasswordError: string | undefined;
  emailSent: boolean = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.resetPasswordForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      // Peut-être vérifier ici si le token est valide ou effectuer d'autres opérations si nécessaire
    });
  }

  resetPassword(): void {
    const passwordControl = this.resetPasswordForm.get('password');
    const confirmPasswordControl = this.resetPasswordForm.get('confirmPassword');

    if (passwordControl && confirmPasswordControl &&
      this.resetPasswordForm.valid && passwordControl.value === confirmPasswordControl.value) {

      this.route.queryParams.subscribe(params => {
        const token = params['token'];

        if (token) {
          const resetData = {
            token: token,
            newPassword: passwordControl.value
          };

          this.apiService.resetPassword(resetData).subscribe(
            (response) => {
              console.log('Réinitialisation du mot de passe réussie :', response);
              this.emailSent = true; // Affichage du message après le changement de mot de passe
              setTimeout(() => {
                this.router.navigate(['/']);
              }, 5000);
            },
            (error) => {
              console.error('Échec de la réinitialisation du mot de passe :', error);
              if (error.status === 0) {
                this.resetPasswordError = 'La connexion à l\'API a été rompue';
              } else if (error.status === 401) {
                this.resetPasswordError = 'Vous n\'avez pas accès à cette fonctionnalité';
              } else {
                this.resetPasswordError = error.error.message || 'Une erreur s\'est produite lors de la réinitialisation du mot de passe.';
              }
            }
          );
        }
      });
    } else {
      this.resetPasswordError = 'Veuillez remplir correctement tous les champs et assurez-vous que les mots de passe correspondent.';
    }
  }
}
