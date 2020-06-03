import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItems } from './menu-items/menu-items';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatDialogRef } from '@angular/material/dialog';

const importsModule: any = [
  CommonModule,
  MaterialModule
]

@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [importsModule],
  exports: [ErrorDialogComponent],
  providers: [MenuItems, ErrorDialogComponent]
})
export class SharedModule { }
