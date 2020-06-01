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

  username: string;
  password: string;
  model: any = {};
  loading: boolean = false

  constructor(private router: Router,
    private _snackBar: MatSnackBar, private loginService: LoginService, private http: HttpClient) { }

  ngOnInit() {
    sessionStorage.setItem('token', '')
  }

  login() {
    this.router.navigate(['/home']);
    this._snackBar.open('Login realizado com sucesso!', 'OK!', {
      duration: 2000, verticalPosition: 'top',
    });
    // this.loginService.login(this.model.username, this.model.password).subscribe(isValid => {
    //   if (isValid) {
    //     sessionStorage.setItem(
    //       'token',
    //       btoa(this.model.username + ':' + this.model.password)
    //     );
    //     this._snackBar.open('Login realizado com sucesso!', 'OK!', {
    //       duration: 2000, verticalPosition: 'top',
    //     });
    //     this.router.navigate(['/home']);
    //   } else {
    //     this._snackBar.open('A autenticação falhou!', 'Erro!', {
    //       duration: 2000, verticalPosition: 'top',
    //     });
    //   }
    // });

  }

}
