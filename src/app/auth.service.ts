import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'userToken';
  private readonly USER_INFO_KEY = 'userInfo';
  private isAuthenticatedValue = false;
  private userInfo: { firstName: string, lastName: string } = { firstName: '', lastName: '' };

  constructor(private router: Router) {
    // Charger les informations de l'utilisateur depuis le localStorage lors de l'initialisation du service
    const storedUserInfo = localStorage.getItem(this.USER_INFO_KEY);
    if (storedUserInfo) {
      this.userInfo = JSON.parse(storedUserInfo);
    }
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.TOKEN_KEY) !== null;
  }

  login(token: string, firstName: string, lastName: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    this.userInfo = { firstName, lastName };
    // Enregistrer les informations de l'utilisateur dans le localStorage
    localStorage.setItem(this.USER_INFO_KEY, JSON.stringify(this.userInfo));
    this.isAuthenticatedValue = true;
  }

  getUserName(): string {
    return `${this.userInfo.firstName} ${this.userInfo.lastName}`;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_INFO_KEY);
    this.isAuthenticatedValue = false;
    this.router.navigate(['/auth/connexion/form']);
  }
}
