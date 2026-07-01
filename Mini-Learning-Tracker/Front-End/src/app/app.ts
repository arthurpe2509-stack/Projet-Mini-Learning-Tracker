import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeRessource } from "./component/ressources/liste-ressource/liste-ressource";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListeRessource],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Mini-Learning-Tracker');
}
