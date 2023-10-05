import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl ='http://localhost:3500/';
  constructor(private router: Router,private http:HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  setToken(token: string): void {

    sessionStorage.setItem('token', token);
  }

  getToken(): string | null {
    return  sessionStorage.getItem('token')

  }

  isLoggedIn() {
    return this.getToken() !== null;

  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ username, password }:any){
      console.log(this.apiUrl)
      return this.http.post<any>(`${this.apiUrl}auth/login`,{username,password});


  }

  registerUser({ username, password, role }: any) {
    return this.http.post<any>(`${this.apiUrl}user/register`, {name, username, password, });
  }

  fetchUserProfile() {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.apiUrl}user/user`,{ headers});
  }


}
