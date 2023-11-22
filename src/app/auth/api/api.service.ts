// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
  loginUser(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login_check`, credentials);
  }

  logoutUser(): Observable<any> {
    // Envoyer une requête POST au point de déconnexion
    return this.http.post(`${this.apiUrl}/logout`, {});
  }
  // Ajoutez d'autres méthodes d'API selon les besoins
}
