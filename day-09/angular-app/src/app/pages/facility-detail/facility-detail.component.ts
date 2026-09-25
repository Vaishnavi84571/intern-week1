import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FacilityService } from '../../services/facility.service';
import { Facility } from '../../models/facility.model';

@Component({
  selector: 'app-facility-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './facility-detail.component.html',
  styleUrl: './facility-detail.component.css'
})
export class FacilityDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly facilityService = inject(FacilityService);

  facility: Facility | null = null;
  loading = true;
  error = '';

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!Number.isInteger(id) || id <= 0) {
      this.error = 'Invalid facility ID.';
      this.loading = false;
      return;
    }

    this.facilityService.getFacility(id).subscribe({
      next: (facility) => {
        this.facility = facility;
        this.loading = false;
      },
      error: (error: Error) => {
        this.error = error.message;
        this.loading = false;
      }
    });
  }
}
