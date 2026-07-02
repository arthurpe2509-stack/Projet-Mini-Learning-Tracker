import { Component, inject, signal } from '@angular/core';
import { RessourceService } from '../../../service/ressource.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ressource } from '../../../shared/models/ressource.model';

@Component({
  selector: 'app-details-ressource',
  imports: [],
  templateUrl: './details-ressource.html',
  styleUrls: ['./details-ressource.css'],
})
export class DetailsRessource {

  private ressourceService = inject(RessourceService);
  private route = inject(ActivatedRoute);
  ressource = signal({} as Ressource);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('ressourceId');

    this.ressourceService.getRessourceById(id).subscribe({
      next: (data) => {
        this.ressource.set(data);
      },
      error: (err) => {
        console.error("Erreur lors du chargement de la ressource", err);
      }
    })
  }

  private RoutesHome = inject(Router);
  navigateToHome() {
    // Standard navigation
    this.RoutesHome.navigate(['']);
  };
}
