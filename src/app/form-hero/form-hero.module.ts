import { ForbiddenValidatorDirective } from './../shared/forbidden-name.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormHeroRoutingModule } from './form-hero-routing.module';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { FormHeroComponent } from './form-hero/form-hero.component';

@NgModule({
  declarations: [IndexComponent, FormHeroComponent, ForbiddenValidatorDirective],
  imports: [
    CommonModule,
    FormsModule,
    FormHeroRoutingModule
  ]
})
export class FormHeroModule { }
