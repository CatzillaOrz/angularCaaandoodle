import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TsExampleComponent } from '../../ts-example/ts-example.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [TsExampleComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [],
  entryComponents: []
})
export class TsTempModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: TsTempModule, providers: []}
  }
 }
