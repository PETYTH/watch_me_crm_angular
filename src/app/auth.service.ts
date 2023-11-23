// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedValue = false;

  constructor(private router: Router) {}

  isAuthenticated(): boolean {
    return this.isAuthenticatedValue;
  }

  login(token: string): void {
    localStorage.setItem('access_token', token);
    this.isAuthenticatedValue = true;
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.isAuthenticatedValue = false;
    this.router.navigate(['/auth/connexion/form']);
  }
}
