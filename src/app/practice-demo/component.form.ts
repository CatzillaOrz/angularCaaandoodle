
import { Component } from '@angular/core';
import { FormGroup  } from '@angular/forms';
import { AbstractBaseComponent } from './abstract.base.component';

@Component({
  selector: 'component-with-form',
  template: `...omitted for the sake of brevity`
})
class ComponentWithForm extends AbstractBaseComponent {
  form: FormGroup;
  submitted: boolean = false; // a flag to be used in template to indicate whether the user tried to submit the form

  resetForm() {
    this.form.reset();
  }

  onSubmit() {
    this.submitted = true;
    if (!this.form.valid) {
      return;
    }
    // perform the actual submit logic
  }
}
