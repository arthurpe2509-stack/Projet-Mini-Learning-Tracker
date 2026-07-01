import { Component, inject, OnInit } from '@angular/core';
import { RessourceService } from '../../../service/ressource.service';
import { Ressource } from '../../../shared/models/ressource.model';

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
    this.ressourceService.getAllRessources().subscribe({
      next: (data) => this.ressources = data,
      error: (err) => console.error('Erreur lors du chargement des ressources.', err)
    });
  }
}
