import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsCookbookRoutingModule } from './rxjs-cookbook-routing.module';
import { IndexComponent } from './index/index.component';
import { MatCardModule } from '@angular/material/card';
import { ZippyComponent } from './zippy/zippy.component';
import { AsyncObservablePipeComponent } from './async-observable-pipe/async-observable-pipe.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AppConfirmationService } from './app-confirmation.service';
import { AppConfirmationComponent } from './app-confirmation/app-confirmation.component';


@NgModule({
  declarations: [IndexComponent, ZippyComponent, AsyncObservablePipeComponent, AppConfirmationComponent],
  imports: [
    CommonModule,
    RxjsCookbookRoutingModule,
    MatCardModule,
    MatDialogModule,
  ],
  entryComponents: [AppConfirmationComponent],
  providers: [AppConfirmationService]
})
export class RxjsCookbookModule { }
