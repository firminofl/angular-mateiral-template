import { DashboardComponent } from './dashboard.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private errorHandler: DashboardComponent

  constructor(private http: HttpClient) { }

  private url = `${environment.urlServer}`;

  public dashboard(): Observable<any> {
    const headers: HttpHeaders = this.setHttpHeader()

    return this.http.get(`${this.url}/dashboard`, { headers })
  }

  private setHttpHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`
    })
  }
}
