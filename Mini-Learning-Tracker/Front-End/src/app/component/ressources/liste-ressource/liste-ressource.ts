import { Component, inject, OnInit } from '@angular/core';
import { RessourceService } from '../../../service/ressource.service';
import { Ressource } from '../../../shared/models/ressource.model';
<<<<<<< HEAD
import { Router, RouterLink } from '@angular/router';
=======
>>>>>>> 6150551 (fix)

@Component({
  selector: 'app-liste-ressource',
  imports: [],
  templateUrl: './liste-ressource.html',
  styleUrl: './liste-ressource.css',
})
export class ListeRessource implements OnInit {

  private ressourceService = inject(RessourceService);
  ressources: Ressource[] = [];

  ngOnInit(): void {
    this.ressourceService.getAllRessources().subscribe(data => {
      this.ressources = data;
    });
  }
<<<<<<< HEAD
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
=======
>>>>>>> 6150551 (fix)
}
