import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-app-confirmation',
  templateUrl: './app-confirmation.component.html',
  styleUrls: ['./app-confirmation.component.scss']
})
export class AppConfirmationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AppConfirmationComponent>,
// tslint:disable-next-line: no-parameter-properties
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
  }

}
export interface DialogData {
  title: string;
  message: string;
  btnOkText: string;
  btnCancelText: string;
}
