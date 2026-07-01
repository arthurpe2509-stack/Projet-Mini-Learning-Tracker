import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';
import { Category } from '../shared/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/categories`;

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  getCategory(categorieId: string | null) : Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${categorieId}`);
  }
}
