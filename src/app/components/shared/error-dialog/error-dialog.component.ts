import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { throwError } from 'rxjs';

import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<ErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

  close() {
    this.treatError()
    this.dialogRef.close();
  }

  treatError() {
    const status = this.data.errorStatus

    switch (status) {
      case 401:
        this.authService.logout()
        break
      case 500:
        return throwError(`Error ${status}. Something bad happened; please try again later.`);
      default:
        return throwError(`Error ${status}. Something bad happened; please try again later.`);
    }
  }
}
