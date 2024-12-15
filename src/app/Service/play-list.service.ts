import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PlayList } from '../model/Play-List';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayListService {

  private baseURL = "http://localhost:8033/api/v1/pruebajava";

  constructor(private httpClient : HttpClient) { }

  private createAuthorizationHeader(): HttpHeaders {
    const username = 'admin';  // Usuario configurado en Spring Security
    const password = 'admin123';  // Contraseña configurada en Spring Security
    const base64Credentials = btoa(`${username}:${password}`);
    return new HttpHeaders({
      'Authorization': `Basic ${base64Credentials}`,
    });
  }

  obtenerListaDeReproduccion():Observable<PlayList[]>{
    const headers = this.createAuthorizationHeader();
      return this.httpClient.get<PlayList[]>(`${this.baseURL}/list`)
  }

  obtenerMedicamentosByName(nombre: string): Observable<PlayList[]> {
    return this.httpClient.get<PlayList[]>(`${this.baseURL}/list/${nombre}`);
  }

  deleteListaDeReproduccion(nombre:string): Observable<void> {
    const headers = this.createAuthorizationHeader();
  
    return this.httpClient.delete<void>(`${this.baseURL}/list/${nombre}`, { headers })
      .pipe(
        catchError(error => {
          if (error.status === 404) {
            // Si el recurso no existe, se lanza un error 404
            console.error('Lista de reproducción no encontrada:', error);
            return throwError(() => new Error('Lista de reproducción no encontrada'));
          } else {
            // Manejo de otros errores
            console.error('Error al eliminar la lista de reproducción:', error);
            return throwError(() => new Error('Error desconocido al eliminar la lista de reproducción'));
          }
        })
      );
  }
  
}
