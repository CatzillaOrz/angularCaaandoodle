import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsCookbookRoutingModule } from './rxjs-cookbook-routing.module';
import { IndexComponent } from './index/index.component';
import { MatCardModule } from '@angular/material/card';
import { ZippyComponent } from './zippy/zippy.component';
import { AsyncObservablePipeComponent } from './async-observable-pipe/async-observable-pipe.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [IndexComponent, ZippyComponent, AsyncObservablePipeComponent],
  imports: [
    CommonModule,
    RxjsCookbookRoutingModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class RxjsCookbookModule { }
