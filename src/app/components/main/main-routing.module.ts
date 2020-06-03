import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main.component';
import { AuthGuard } from 'src/app/guards/auth/auth.guard';


const mainRoutes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard] },
      { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: '**', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
