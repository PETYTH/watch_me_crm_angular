// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpHeaders} from "@angular/common/http";

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
}
