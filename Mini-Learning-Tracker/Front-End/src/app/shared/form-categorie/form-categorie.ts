import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategorieService } from '../../service/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-categorie',
  imports: [ReactiveFormsModule],
  templateUrl: './form-categorie.html',
  styleUrls: ['./form-categorie.css'],
})
export class FormCategorie {
  private formBuilder = inject(FormBuilder);
  private categorieService = inject(CategorieService);

  success = false;
  errorMsg = '';

  categoryform: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(10)]],

  });
  onSubmit() {
    if (this.categoryform.invalid) {
      return;
    }
    this.categorieService.create(this.categoryform.value).subscribe({
      next: () => {
        this.success = true;
        this.categoryform.reset();
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
