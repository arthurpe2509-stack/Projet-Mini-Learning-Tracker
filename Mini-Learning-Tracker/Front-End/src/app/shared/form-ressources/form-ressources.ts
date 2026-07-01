import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RessourceService } from '../../service/ressource.service';


@Component({
  selector: 'app-form-ressources',
  imports: [ReactiveFormsModule],
  templateUrl: './form-ressources.html',
  styleUrls: ['./form-ressources.css'],
})
export class FormRessources {
  private formBuilder = inject(FormBuilder);
  private ressourcesService = inject(RessourceService);

  success = false;
  errorMsg = 'Erreur lors de l\'envoi du formulaire';

  form: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
  });

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.ressourcesService.create(this.form.value).subscribe({
      next: () => {
        this.success = true;
        this.form.reset();
      },
      error: (err) => {
        this.errorMsg = 'Erreur lors de l\'envoi : ' + err.message;
      }
    })

  }

}
