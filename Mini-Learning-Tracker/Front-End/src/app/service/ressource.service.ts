import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ressource } from '../shared/models/ressource.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class RessourceService {

  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/ressources`;

  create(data: Ressource): Observable<Ressource> {
    return this.http.post<Ressource>(this.apiUrl, data);
  } 

  getAllRessources(): Observable<Ressource[]> {
    return this.http.get<Ressource[]>(this.apiUrl);
  }
  
  getRessourceById(ressourceId: string | null) : Observable<Ressource>{
    return this.http.get<Ressource>(`${this.apiUrl}/${ressourceId}`);
  }
}
