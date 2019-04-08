import { Observable, ObservableLike } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppConfirmationComponent } from './app-confirmation/app-confirmation.component';

@Injectable({
  providedIn: 'root'
})
export class AppConfirmationService {
  // tslint:disable-next-line: no-parameter-properties
  constructor(public dialog: MatDialog) { }

  openDialog(callback: Function, title: string,
    message: string,
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancel'): void {
    const dialogRef = this.dialog.open(AppConfirmationComponent, {
      width: '250px',
      data: {title, message, btnOkText, btnCancelText}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        callback();
      }
    });
    // return dialogRef;
  }
}
