import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title: string = 'Login'
  email: string;
  password: string;
  model: any = {};
  loading: boolean = false

  constructor(
    private appComponent: AppComponent,
    private router: Router,
    private _snackBar: MatSnackBar, 
    private loginService: LoginService, 
    private http: HttpClient) { }

  ngOnInit() {
    sessionStorage.setItem('token', '')
    this.appComponent.setTitle(this.title)
  }

  login() {
    this.loginService.login(this.model.email, this.model.password).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem('token', isValid.token);

        this._snackBar.open('Login realizado com sucesso!', 'OK!', {
          duration: 2000, verticalPosition: 'top',
        });

        this.router.navigate(['/home']);
      } else {
        this._snackBar.open(`A autenticação falhou! ${isValid.error.message}`, 'Erro!', {
          duration: 2000, verticalPosition: 'top',
        });
      }
    });
  }
}
