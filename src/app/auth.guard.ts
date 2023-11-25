// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated()) {
      console.log('Utilisateur connecté');

      if (state.url === '/auth/connexion/form') {
        console.log('Redirection vers la page d\'acceuil');
        this.router.navigate(['/']);
        return false;
      }

      return true;
    } else {
      console.log('Utilisateur non connecté.');

      // Ajoutez une condition pour rediriger uniquement si l'URL actuelle n'est pas la page de connexion
      if (state.url !== '/auth/connexion/form') {
        console.log('Redirection vers la page de connexion');
        return this.router.createUrlTree(['/auth/connexion/form']);
      }

      return true;
    }
  }
}
