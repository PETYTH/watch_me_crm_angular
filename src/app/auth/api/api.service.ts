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
  private apiBase  = 'http://127.0.0.1:8000/forgot'

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
    return this.http.post(`${this.apiBase}/forgot-password`, userData);
  }

  resetPassword(userData: any): Observable<any> {
    return this.http.post(`${this.apiBase}/reset-password`, userData);
  }

  deleteUser(id: number, userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/user_delete`, userData);
  }

  getAllClientsByEntreprise(entrepriseId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/all_clients_entreprise/${entrepriseId}`);
  }

    count_clients_entreprise(entrepriseId: number, headers: any): Observable<any> {
        return this.http.get(`${this.apiUrl}/count_clients_entreprise/${entrepriseId}`, headers);
    }


    getAllEntreprises(): Observable<any> {
        const token = this.authService.getToken();

        if (!token) {
            console.error('Le token de session n\'a pas été trouvé.');
            return throwError('Token not found');
        }

        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.get(`${this.apiUrl}/all_entreprises`, { headers }).pipe(
            catchError((error) => {
                console.error('Une erreur est survenue', error);
                return throwError(error);
            })
        );
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

  getOneEmploye(id: any): Observable<any> {
    const token = this.authService.getToken();

    if (!token) {
      console.error('Le token de session n\'a pas été trouvé.');
      return new Observable(observer => {
        observer.error('Token not found');
        observer.complete();
      });
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.apiUrl}/${id}/show_employe`, { headers }).pipe(
      catchError((error) => {
        console.error('Une erreur est survenue');
        return new Observable(observer => {
          observer.error(error);
          observer.complete();
        });
      })
    );
  }

  deleteEmploye(id: any): Observable<any> {
    const token = this.authService.getToken();

    if (!token) {
      console.error('Le token de session n\'a pas été trouvé.');
      return new Observable(observer => {
        observer.error('Token not found');
        observer.complete();
      });
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(`${this.apiUrl}/${id}/delete_employe`, null, { headers }).pipe(
      catchError((error) => {
        console.error('Une erreur est survenue');
        return new Observable(observer => {
          observer.error(error);
          observer.complete();
        });
      })
    );
  }

  // Entreprise //


  getOneEntreprise(id: any): Observable<any> {
    const token = this.authService.getToken();

    if (!token) {
      console.error('Le token de session n\'a pas été trouvé.');
      return new Observable(observer => {
        observer.error('Token not found');
        observer.complete();
      });
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.apiUrl}/${id}/show_entreprise`, { headers }).pipe(
      catchError((error) => {
        console.error('Une erreur est survenue');
        return new Observable(observer => {
          observer.error(error);
          observer.complete();
        });
      })
    );
  }

  deleteEntreprise(id: any): Observable<any> {
    const token = this.authService.getToken();

    if (!token) {
      console.error('Le token de session n\'a pas été trouvé.');
      return new Observable(observer => {
        observer.error('Token not found');
        observer.complete();
      });
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(`${this.apiUrl}/${id}/delete_entreprise`, null, { headers }).pipe(
      catchError((error) => {
        console.error('Une erreur est survenue');
        return new Observable(observer => {
          observer.error(error);
          observer.complete();
        });
      })
    );
  }

// USER //
  getAllUsers(): Observable<any> {
    const token = this.authService.getToken();

    if (!token) {
      console.error('Le token de session n\'a pas été trouvé.');
      return new Observable(observer => {
        observer.error('Token not found');
        observer.complete();
      });
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/all_user`, { headers }).pipe(
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
