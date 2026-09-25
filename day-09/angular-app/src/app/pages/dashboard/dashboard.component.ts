import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { FacilityService } from '../../services/facility.service';
import { InspectionService } from '../../services/inspection.service';
import { ComplaintService } from '../../services/complaint.service';
import { Facility } from '../../models/facility.model';
import { Inspection } from '../../models/inspection.model';
import { Complaint } from '../../models/complaint.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  private readonly facilityService = inject(FacilityService);
  private readonly inspectionService = inject(InspectionService);
  private readonly complaintService = inject(ComplaintService);

  facilities: Facility[] = [];
  inspections: Inspection[] = [];
  complaints: Complaint[] = [];
  loading = true;
  error = '';

  ngOnInit(): void {
    forkJoin({
      facilities: this.facilityService.getFacilities(),
      inspections: this.inspectionService.getInspections(),
      complaints: this.complaintService.getComplaints()
    }).subscribe({
      next: (data) => {
        this.facilities = data.facilities;
        this.inspections = data.inspections;
        this.complaints = data.complaints;
        this.loading = false;
      },
      error: (error: Error) => {
        this.error = error.message;
        this.loading = false;
      }
    });
  }

  get resolvedComplaints(): number {
    return this.complaints.filter((complaint) => complaint.status.toLowerCase() === 'resolved').length;
  }

  get averageFacilityScore(): number {
    const values = this.facilities
      .map((facility) => facility.cleanliness_score)
      .filter((value): value is number => value !== null);
    return values.length
      ? values.reduce((sum, value) => sum + value, 0) / values.length
      : 0;
  }
}
