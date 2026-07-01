import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeRessource } from "./component/ressources/liste-ressource/liste-ressource";
import { FormRessources } from './shared/form-ressources/form-ressources';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListeRessource, FormRessources],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Mini-Learning-Tracker');
}
