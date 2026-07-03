import { Component, inject, OnInit, signal } from '@angular/core';
import { RessourceService } from '../../../service/ressource.service';
import { Ressource } from '../../../shared/models/ressource.model';
import { Router, RouterLink } from '@angular/router';
import { Category } from '../../../shared/models/category.model';

@Component({
  selector: 'app-liste-ressource',
  imports: [RouterLink],
  templateUrl: './liste-ressource.html',
  styleUrls: ['./liste-ressource.css'],
})
export class ListeRessource implements OnInit {

  private ressourceService = inject(RessourceService);
  ressources = signal([] as Ressource[]);
  categories = signal([] as Category[]);

  ngOnInit(): void {
    this.ressourceService.getAllRessources().subscribe({
      next: (data) => this.ressources.set(data),
      error: (err) => console.error('Erreur lors du chargement des ressources.', err)
    });
  }
  private RoutesRessourcesForm = inject(Router);
  navigateToRessourcesForm() {
    // Standard navigation
    this.RoutesRessourcesForm.navigate(['ressources/new']);
  };

  private RoutesRessourcesList = inject(Router);
  navigateToRessourcesList(ressourceId: string) {
    // Standard navigation
    this.RoutesRessourcesList.navigate([`ressources/${ressourceId}`]);
  };

  private RoutesCategoriesForm = inject(Router);
  navigateToCategoriesForm() {
    // Standard navigation
    this.RoutesCategoriesForm.navigate(['categories/new']);
  };

  private RoutesCategories = inject(Router);
  navigateToCategories() {
    // Standard navigation
    this.RoutesCategories.navigate(['categories']);
  };
}
