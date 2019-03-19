import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsCookbookRoutingModule } from './rxjs-cookbook-routing.module';
import { IndexComponent } from './index/index.component';
import { MatCardModule } from '@angular/material/card';
import { ZippyComponent } from './zippy/zippy.component';
import { AsyncObservablePipeComponent } from './async-observable-pipe/async-observable-pipe.component';

@NgModule({
  declarations: [IndexComponent, ZippyComponent, AsyncObservablePipeComponent],
  imports: [
    CommonModule,
    RxjsCookbookRoutingModule,
    MatCardModule,
    // MatGridListModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatExpansionModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatToolbarModule,
    // MatMenuModule,
    // MatDialogModule,
    // MatSelectModule,
    // MatTableModule,
    // MatCheckboxModule,
    // MatListModule,
    // MatListModule,
    // MatTabsModule,
    // MatRadioModule
  ]
})
export class RxjsCookbookModule { }
