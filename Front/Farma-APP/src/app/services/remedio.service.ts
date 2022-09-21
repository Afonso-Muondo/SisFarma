import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Remedio } from '../models/Remedio';

@Injectable(
  // {providedIn: 'root'}
  )
export class RemedioService {
  baseURL = 'https://localhost:5001/api/remedios';

  constructor(private http: HttpClient) { }

  public getRemedios(): Observable<Remedio[]> {
    return this.http.get<Remedio[]>(this.baseURL);
  }

  public getRemediosByNome(nome: string): Observable<Remedio[]> {
    return this.http.get<Remedio[]>(`${this.baseURL}/${nome}/nome`);
  }

  public getRemedioById(id: number): Observable<Remedio> {
    return this.http.get<Remedio>(`${this.baseURL}/${id}`);
  }

  public postRemedio(remedio: Remedio): Observable<Remedio> {
    return this.http.post<Remedio>(this.baseURL, remedio);
  }

  public putRemedio(id: number, remedio: Remedio): Observable<Remedio> {
    return this.http.put<Remedio>(`${this.baseURL}/${id}`, remedio);
  }

  public deleteRemedio(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}
