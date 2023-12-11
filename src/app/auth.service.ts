import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'userToken';
  private readonly USER_INFO_KEY = 'userInfo';
  private readonly TOKEN_EXPIRY_KEY = 'tokenExpiry'; // Ajout de la clé pour la date d'expiration du token
  private isAuthenticatedValue = false;
  private userInfo: { firstName: string, lastName: string, role: string[] } = { firstName: '', lastName: '', role: [] };

  constructor(private router: Router) {
    // Charger les informations de l'utilisateur depuis le sessionStorage lors de l'initialisation du service
    const storedUserInfo = sessionStorage.getItem(this.USER_INFO_KEY);
    if (storedUserInfo) {
      this.userInfo = JSON.parse(storedUserInfo);
    }

    // Vérifier si le token est expiré lors de l'initialisation du service
    const tokenExpiry = sessionStorage.getItem(this.TOKEN_EXPIRY_KEY);
    if (tokenExpiry) {
      const expiryDate = new Date(tokenExpiry);
      const currentDate = new Date();

      // Si la date d'expiration est passée, déconnecter l'utilisateur
      if (expiryDate < currentDate) {
        this.logout();
      }
    }
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem(this.TOKEN_KEY) !== null;
  }

  login(token: string, firstName: string, lastName: string, role: string, tokenExpiry: Date): void {
    sessionStorage.setItem(this.TOKEN_KEY, token);
    this.userInfo = { firstName, lastName, role: [role] };
    sessionStorage.setItem(this.USER_INFO_KEY, JSON.stringify(this.userInfo));
    sessionStorage.setItem(this.TOKEN_EXPIRY_KEY, tokenExpiry.toISOString()); // Stocker la date d'expiration du token
    this.isAuthenticatedValue = true;
  }

  getUserName(): string {
    return `${this.userInfo.firstName} ${this.userInfo.lastName}`;
  }

  getUserRole(): string {
    return `${this.userInfo.role}`;
  }

  logout(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.USER_INFO_KEY);
    sessionStorage.removeItem(this.TOKEN_EXPIRY_KEY); // Supprimer également la date d'expiration du token
    this.isAuthenticatedValue = false;
    this.router.navigate(['/auth/connexion/form']);
  }
}
