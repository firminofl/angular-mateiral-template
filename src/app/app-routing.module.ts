import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth/auth.guard';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: '', loadChildren: () => import('./components/main/main.module').then(m => m.MainModule), canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
