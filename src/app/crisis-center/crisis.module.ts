import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CrisisRoutingModule } from './crisis-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CrisisRoutingModule,
    FormsModule
  ],
  declarations: [
  ]
})
export class CrisisModule { }
