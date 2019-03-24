import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroFormRoutingModule } from './hero-form-routing.module';
import { IndexComponent } from './index/index.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';

@NgModule({
  declarations: [IndexComponent, HeroFormComponent, HeroFormReactiveComponent],
  imports: [CommonModule, FormsModule, HeroFormRoutingModule, ReactiveFormsModule]
})
export class HeroFormModule {}
