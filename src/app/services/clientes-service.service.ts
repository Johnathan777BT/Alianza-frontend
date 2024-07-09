import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders, HttpStatusCode  } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesServiceService {

  constructor(private http:HttpClient) { }


  private _Header = {
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json',  
}

  getList(nombre: String):Observable<any>
  {
    return this.http.get(environment.urlApi+"clientes/listar?nombre="+nombre).pipe(
      catchError(this.handleError)
    )
  }


  
  getCSV(nombre: String):Observable<any>
  {
    return this.http.get(environment.urlApi+"clientes/listar/csv?nombre="+nombre,  
      { responseType: 'blob' as 'json', observe: 'response' });
  }


  create(cliente: String):Observable<any>
  {
  
    return this.http.post(environment.urlApi+"clientes/guardar", cliente, 
      {headers: this._Header}).pipe(
      catchError(this.handleError)
    )
  }


  private handleError(error:HttpErrorResponse): Observable<never>{
    if(error.status== 403){
      console.info('No autorizado');
      return throwError(()=> new Error('No tiene permisos para realizar la solicitud.'));      
    }
    else if(error.status===0){
      console.error('Se ha producio un error ', error.error);
    }
    else{
      console.info('Backend retornó el código de estado ', error.status, error.error);
    
    }
    return throwError(()=> new Error('Algo falló. Por favor intente nuevamente.'));
  }
}
