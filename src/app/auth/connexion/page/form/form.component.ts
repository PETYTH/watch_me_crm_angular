import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../api/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  credentialsForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.credentialsForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  loginUser(): void {
    const emailControl = this.credentialsForm.get('email');
    const passwordControl = this.credentialsForm.get('password');

    if (emailControl && passwordControl && emailControl.valid && passwordControl.valid) {
      const credentials = {
        username: emailControl.value,
        password: passwordControl.value,
      };

      this.apiService.loginUser(credentials).subscribe(
          (response) => {
            console.log('Connexion réussie :', response);
            // Stockez le jeton ou effectuez d'autres actions si nécessaire
          },
          (error) => {
            console.error('Échec de la connexion :', error);
            // Gérez l'erreur, par exemple, affichez un message à l'utilisateur
          }
      );
    }
  }

  logout(): void {
    this.apiService.logoutUser().subscribe(
        (response) => {
          console.log('Déconnexion réussie :', response);
          // Effectuez les actions nécessaires après la déconnexion
        },
        (error) => {
          console.error('Erreur lors de la déconnexion :', error);
          // Gérez l'erreur en conséquence
        }
    );
  }

}
