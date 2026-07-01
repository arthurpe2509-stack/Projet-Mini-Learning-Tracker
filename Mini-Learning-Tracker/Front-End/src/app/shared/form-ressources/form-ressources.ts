import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-ressources',
  imports: [],
  templateUrl: './form-ressources.html',
  styleUrls: ['./form-ressources.css'],
})
export class FormRessources {
  private formBuilder = inject(FormBuilder);

  form: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
  });
  onSubmit() {
    if (this.form.valid) {
      console.log('Form is valid');
    }

  }
}
