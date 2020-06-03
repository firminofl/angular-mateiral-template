import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = `${environment.urlServer}`;

  constructor(private http: HttpClient) { }

  public login(email, password): Observable<any> {
    return this.http.post(`${this.url}/login`, {
      email,
      password
    });
  }
}
