import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsyncRaceService {
  private baseUrl = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) { }

  getGarage(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/garage`);
  }

  startRace(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/engine`, {});
  }

  // Add more methods for other API endpoints as needed
}