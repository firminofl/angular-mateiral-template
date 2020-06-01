import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = `${environment.urlServer}`;

  constructor(private http: HttpClient) { }

  public login(name, password): Observable<any> {
    return this.http.post(`${this.url}/login`, {
      name: name,
      password: password
    });
  }
}
