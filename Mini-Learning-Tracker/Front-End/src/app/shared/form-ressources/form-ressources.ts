import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RessourceService } from '../../service/ressource.service';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { ListeCategorie } from '../../component/categories/liste-categorie/liste-categorie';
import { Category } from '../models/category.model';
import { CategorieService } from '../../service/categorie.service';
=======
>>>>>>> d50e1a5 (boutons routes)


@Component({
  selector: 'app-form-ressources',
  imports: [ReactiveFormsModule],
  templateUrl: './form-ressources.html',
  styleUrls: ['./form-ressources.css'],
})
export class FormRessources implements OnInit {
<<<<<<< HEAD
  
=======
>>>>>>> 4795058 (tout plein de truc)
  private formBuilder = inject(FormBuilder);
  private ressourcesService = inject(RessourceService);
  private categorieService = inject(CategorieService);

  type = ['ARTICLE', 'VIDEO', 'DOCUMENTATION', 'COURSE', 'OTHER'];
  status = ['TODO', 'IN_PROGRESS', 'DONE'];
<<<<<<< HEAD
<<<<<<< HEAD
=======
  categories = signal([] as Category[]);
  // ngon init et stocker dans liste de catégory avec signal
>>>>>>> 4795058 (tout plein de truc)
=======
>>>>>>> cbfb3e0 (fix : fix de l'entrée de la sortie pour les categories dans les ressources)
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

<<<<<<< HEAD

  ngOnInit(): void {
    this.categorieService.getCategories().subscribe({
      next: (data) => this.categories.set(data),
      error: (err) => console.error('Erreur lors du chargement des catégories.', err)
    });
  }
=======
>>>>>>> d50e1a5 (boutons routes)
}
