import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Facility } from '../models/facility.model';

@Injectable({ providedIn: 'root' })
export class FacilityService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api/facilities';

  getFacilities(): Observable<Facility[]> {
    return this.http.get<Facility[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getFacility(id: number): Observable<Facility> {
    return this.http.get<Facility>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError = (error: unknown) => {
    console.error('Facility API error:', error);
    return throwError(() => new Error('Unable to load facility data from the Laravel API.'));
  };
}
