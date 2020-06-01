import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MaterialModule } from 'src/app/material/material.module';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';


import { FlexLayoutModule } from '@angular/flex-layout';

import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const importsModule: any = [
  CommonModule,
  MaterialModule,
  FlexLayoutModule,
  ChartsModule,
  NgxChartsModule,
  NgxDatatableModule,
  // MatIconModule,
  // MatCardModule,
  // MatButtonModule,
  // MatListModule,
  // MatProgressBarModule,
  // MatMenuModule
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [importsModule]
})
export class DashboardModule { }
