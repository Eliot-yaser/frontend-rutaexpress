import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShipmentService {
  // Apunta al API Gateway o Backend de tu compañero
  private apiUrl = 'http://localhost:8080/api/shipments';

  constructor(private http: HttpClient) {}

  getShipments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}