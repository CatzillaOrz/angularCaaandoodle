import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormCookRoutingModule } from './form-cook-routing.module';
import { IndexComponent } from './index/index.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [IndexComponent, NameEditorComponent, ProfileEditorComponent],
  imports: [CommonModule, FormCookRoutingModule, ReactiveFormsModule],
})
export class FormCookModule {}
