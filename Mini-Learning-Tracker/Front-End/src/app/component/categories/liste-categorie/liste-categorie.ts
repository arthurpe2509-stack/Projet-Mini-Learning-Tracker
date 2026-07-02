import { Component, inject, OnInit, signal } from '@angular/core';
import { CategorieService } from '../../../service/categorie.service';
import { Category } from '../../../shared/models/category.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-liste-categorie',
  imports: [],
  templateUrl: './liste-categorie.html',
  styleUrls: ['./liste-categorie.css'],
})
export class ListeCategorie implements OnInit {
  private categorieService = inject(CategorieService);
  categories = signal([] as Category[]);
  category: any;

  ngOnInit(): void {
    this.categorieService.getCategories().subscribe({
      next: (data) => this.categories.set(data),
      error: (err) => console.error('Erreur lors du chargement des catégories.', err)
    });
  }

  private RoutesCategoryForm = inject(Router);
  navigateToRessourcesForm() {

    this.RoutesCategoryForm.navigate(['categories/new']);
  };

  private RoutesCategoryList = inject(Router);
  navigateToCategoryList(categorieId: string) {
    // Standard navigation
    this.RoutesCategoryList.navigate([`categories/${categorieId}`]);
  };

  private RoutesHome = inject(Router);
  navigateToHome() {
    // Standard navigation
    this.RoutesHome.navigate(['']);
  }
}
