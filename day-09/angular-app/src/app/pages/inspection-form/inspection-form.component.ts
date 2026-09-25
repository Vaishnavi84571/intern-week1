import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FacilityService } from '../../services/facility.service';
import { InspectionService } from '../../services/inspection.service';
import { Facility } from '../../models/facility.model';

@Component({
  selector: 'app-inspection-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './inspection-form.component.html'
})
export class InspectionFormComponent implements OnInit {
  private readonly facilityService = inject(FacilityService);
  private readonly inspectionService = inject(InspectionService);
  private readonly router = inject(Router);

  facilities: Facility[] = [];
  loading = true;
  submitting = false;
  error = '';
  success = '';

  form = {
    facility_id: '',
    inspector_id: '2',
    inspection_date: new Date().toISOString().slice(0, 10),
    score: 80,
    notes: ''
  };

  ngOnInit(): void {
    this.facilityService.getFacilities().subscribe({
      next: (facilities) => {
        this.facilities = facilities;
        this.loading = false;
      },
      error: (error: Error) => {
        this.error = error.message;
        this.loading = false;
      }
    });
  }

  submit(): void {
    this.error = '';
    this.success = '';

    if (!this.form.facility_id) {
      this.error = 'Please select a facility.';
      return;
    }

    if (this.form.score < 0 || this.form.score > 100) {
      this.error = 'Score must be between 0 and 100.';
      return;
    }

    this.submitting = true;

    this.inspectionService.createInspection({
      facility_id: Number(this.form.facility_id),
      inspector_id: Number(this.form.inspector_id) || null,
      inspection_date: this.form.inspection_date,
      score: Number(this.form.score),
      notes: this.form.notes.trim()
    }).subscribe({
      next: () => {
        this.submitting = false;
        this.success = 'Inspection created successfully.';
        setTimeout(() => this.router.navigate(['/inspections/history']), 700);
      },
      error: (error: Error) => {
        this.submitting = false;
        this.error = error.message;
      }
    });
  }
}
