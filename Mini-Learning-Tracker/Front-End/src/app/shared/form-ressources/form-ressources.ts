import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RessourceService } from '../../service/ressource.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-ressources',
  imports: [ReactiveFormsModule],
  templateUrl: './form-ressources.html',
  styleUrls: ['./form-ressources.css'],
})
export class FormRessources {
  private formBuilder = inject(FormBuilder);
  private ressourcesService = inject(RessourceService);

  type = ['ARTICLE', 'VIDEO', 'DOCUMENTATION', 'COURSE', 'OTHER'];
  status = ['TODO', 'IN_PROGRESS', 'DONE'];

  success = false;
  errorMsg = '';

  form: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    category: ['', [Validators.required, Validators.minLength(3)]],
    type: ['', Validators.required],
    status: ['', Validators.required],
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

  private RoutesHome = inject(Router);
  navigateToHome() {
    // Standard navigation
    this.RoutesHome.navigate(['']);
  };

}
