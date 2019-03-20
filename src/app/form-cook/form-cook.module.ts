import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormCookRoutingModule } from './form-cook-routing.module';
import { IndexComponent } from './index/index.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IndexComponent, NameEditorComponent],
  imports: [CommonModule, FormCookRoutingModule, ReactiveFormsModule],
})
export class FormCookModule {}
