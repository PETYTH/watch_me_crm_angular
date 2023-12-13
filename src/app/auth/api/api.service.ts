// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {HttpHeaders} from "@angular/common/http";
import {AuthService} from "../../auth.service";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(
    private http: HttpClient,
    private authService: AuthService) {}

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
  loginUser(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login_check`, credentials);
  }

  logoutUser(headers: HttpHeaders): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}, { headers });
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/show`);
  }

  editUser(id: number, userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/user_edit`, userData);
  }

  forgotPassword(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgot-password`, userData);
  }

  resetPassword(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset-password`, userData);
  }

  deleteUser(id: number, userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/user_delete`, userData);
  }

  // Ajoutez d'autres méthodes d'API selon les besoins
  countEmployes(): Observable<any> {
    const token = this.authService.getToken();

    if (!token) {
      console.error('Le token de session n\'a pas été trouvé.');
      return new Observable(observer => {
        observer.error('Token not found');
        observer.complete();
      });
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/count_employes`, { headers }).pipe(
      catchError((error) => {
        console.error('Une erreur est survenue');
        return new Observable(observer => {
          observer.error(error);
          observer.complete();
        });
      })
    );
  }

  countEntreprises(): Observable<any> {
    const token = this.authService.getToken();

    if (!token) {
      console.error('Le token de session n\'a pas été trouvé.');
      return new Observable(observer => {
        observer.error('Token not found');
        observer.complete();
      });
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/count_entreprises`, { headers }).pipe(
      catchError((error) => {
        console.error('Une erreur est survenue');
        return new Observable(observer => {
          observer.error(error);
          observer.complete();
        });
      })
    );
  }

  // Employe //
  getAllEmployes(): Observable<any> {
    const token = this.authService.getToken();

    if (!token) {
      console.error('Le token de session n\'a pas été trouvé.');
      return new Observable(observer => {
        observer.error('Token not found');
        observer.complete();
      });
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/all_employes`, { headers }).pipe(
      catchError((error) => {
        console.error('Une erreur est survenue');
        return new Observable(observer => {
          observer.error(error);
          observer.complete();
        });
      })
    );
  }
}
