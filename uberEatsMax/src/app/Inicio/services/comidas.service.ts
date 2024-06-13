import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComidasService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/';

  constructor(private http: HttpClient) { }

  // Obtener las categorías de comidas con sus imágenes
  getCategoriasConImagen(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}categories.php`)
      .pipe(
        catchError(error => {
          console.error('Error al obtener categorías:', error);
          return of([]);
        }),
        map((response: { categories: any[] }) => {
          if (response.categories && response.categories.length > 0) {
            return response.categories.map((categorias: { strCategory: string, strCategoryThumb: string }) => ({
              nombre: categorias.strCategory,
              imagen: categorias.strCategoryThumb
            }));
          } else {
            return [];
          }
        })
      );
  }
}

