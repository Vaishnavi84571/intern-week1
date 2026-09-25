import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Inspection, InspectionPayload } from '../models/inspection.model';

@Injectable({ providedIn: 'root' })
export class InspectionService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api/inspections';

  getInspections(): Observable<Inspection[]> {
    return this.http.get<Inspection[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  createInspection(payload: InspectionPayload): Observable<Inspection> {
    return this.http.post<Inspection>(this.apiUrl, payload).pipe(
      catchError(this.handleError)
    );
  }

  updateInspection(id: number, payload: Partial<InspectionPayload>): Observable<Inspection> {
    return this.http.put<Inspection>(`${this.apiUrl}/${id}`, payload).pipe(
      catchError(this.handleError)
    );
  }

  deleteInspection(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError = (error: unknown) => {
    console.error('Inspection API error:', error);
    return throwError(() => new Error('Unable to load inspection data from the Laravel API.'));
  };
}
