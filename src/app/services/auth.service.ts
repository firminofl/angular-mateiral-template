import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';

import * as decode from 'jwt-decode';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtHelper = new JwtHelperService();
  private url: string = `${environment.urlServer}`
  user: any;

  constructor(private http: HttpClient, private router: Router) { }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (this.jwtHelper.isTokenExpired(token))
      this.logout()
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(user: any): Promise<any> {
    return this.http.post(`${this.url}/login`, user).toPromise()
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
