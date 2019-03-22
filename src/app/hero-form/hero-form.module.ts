import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroFormRoutingModule } from './hero-form-routing.module';
import { IndexComponent } from './index/index.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  declarations: [IndexComponent, HeroFormComponent],
  imports: [
    CommonModule,
    HeroFormRoutingModule
  ]
})
export class HeroFormModule { }
