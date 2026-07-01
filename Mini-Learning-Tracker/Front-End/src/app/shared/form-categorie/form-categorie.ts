import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-categorie',
  imports: [],
  templateUrl: './form-categorie.html',
  styleUrls: ['./form-categorie.css'],
})
export class FormCategorie {
  private formBuilder = inject(FormBuilder);

  form: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
  });
  onSubmit() {
    if (this.form.valid) {
      console.log('Form is valid');
    }

  }
}
