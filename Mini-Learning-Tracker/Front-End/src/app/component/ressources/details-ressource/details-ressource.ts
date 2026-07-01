import { Component, inject } from '@angular/core';
import { CategorieService } from '../../../service/categorie.service';

@Component({
  selector: 'app-details-ressource',
  imports: [],
  templateUrl: './details-ressource.html',
  styleUrls: ['./details-ressource.css'],
})
export class DetailsRessource {
  private categorieService = inject(CategorieService);

  id: number = 0;
  title: string = '';
  description: string = '';
  url: string = '';
  type: string = '';
  status: string = '';
  createdAt: string = '';
  ngOnInit() {
    const category = this.categorieService.getCategorieService();
    console.log('Category:', category);
  }
}
