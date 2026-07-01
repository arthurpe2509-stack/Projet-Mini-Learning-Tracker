import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Category } from '../shared/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  getCategorieService() {
    // Implementation of the service method
  }
  
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/categories`;

  create(data: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, data);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  getCategory(categorieId: string | null) : Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${categorieId}`);
  }
}
