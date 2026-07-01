import { Component } from '@angular/core';

@Component({
  selector: 'app-form-categorie',
  imports: [],
  templateUrl: './form-categorie.html',
  styleUrls: ['./form-categorie.css'],
})
export class FormCategorie {
  id: number = 0;
  name: string = '';
  description: string = '';
}
