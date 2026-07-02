import { Component, inject, OnInit, signal } from '@angular/core';
import { RessourceService } from '../../../service/ressource.service';
import { Ressource } from '../../../shared/models/ressource.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-liste-ressource',
  imports: [RouterLink],
  templateUrl: './liste-ressource.html',
  styleUrls: ['./liste-ressource.css'],
})
export class ListeRessource implements OnInit {

  private ressourceService = inject(RessourceService);
  ressources = signal([] as Ressource[]);

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
}
