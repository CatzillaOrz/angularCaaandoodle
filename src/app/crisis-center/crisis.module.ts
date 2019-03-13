import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { CrisisRoutingModule } from './crisis-routing.module';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    CrisisRoutingModule
  ],
  declarations: [
  ]
})
export class CrisisModule { }
