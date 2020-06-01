import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardModule } from './dashboard/dashboard.module'
import { MainComponent } from './main.component'
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { LoginComponent } from '../login/login.component';
import { SharedModule } from '../shared/shared.module';

const declarationsComponents: any = [
  MainComponent,
  LoginComponent
]

const importsModule: any = [
  CommonModule,
  MainRoutingModule,
  FormsModule,
  MaterialModule,
  DashboardModule,
  SharedModule
]

@NgModule({
  declarations: [declarationsComponents],
  imports: [importsModule]
})
export class MainModule { }
