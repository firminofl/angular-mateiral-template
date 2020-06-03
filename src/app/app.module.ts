import { ErrorDialogComponent } from './components/shared/error-dialog/error-dialog.component';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { MainModule } from 'src/app/components/main/main.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';

const imports: any = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MaterialModule,
  MainModule,
  FormsModule,
  MatSidenavModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule,
  MatTabsModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatSelectModule,
  MatCardModule,
  MatProgressSpinnerModule,
  HttpClientModule
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [imports],
  providers: [
    Title,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorDialogComponent]
})
export class AppModule { }
