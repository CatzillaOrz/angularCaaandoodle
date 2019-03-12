import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {
  crisis: any;
  editName: any;

  constructor(
    public dialogService: DialogService,
  ) { }
    canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  ngOnInit() {

  }




  // cancel() {
  //   this.gotoCrises();
  // }

  // save() {
  //   this.crisis.name = this.editName;
  //   this.gotoCrises();
  // }

}
