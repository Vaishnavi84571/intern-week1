import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Complaint } from '../models/complaint.model';

@Injectable({ providedIn: 'root' })
export class ComplaintService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api/complaints';

  getComplaints(): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  updateComplaintStatus(id: number, status: string): Observable<Complaint> {
    return this.http.put<Complaint>(`${this.apiUrl}/${id}`, { status }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError = (error: unknown) => {
    console.error('Complaint API error:', error);
    return throwError(() => new Error('Unable to load complaint data from the Laravel API.'));
  };
}
