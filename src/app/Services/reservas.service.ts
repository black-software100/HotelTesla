import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  url: string = 'http://localhost:8080';
  constructor(private reservas:HttpClient) { }

  lista(): Observable<any>{
    let   endpoint = "/buscarreservas"
    let uri:string = this.url + endpoint
    return this.reservas.get(uri) 
  }
}