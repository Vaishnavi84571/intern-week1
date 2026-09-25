import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InspectionService } from '../../services/inspection.service';
import { Inspection } from '../../models/inspection.model';

@Component({
  selector: 'app-inspection-history',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './inspection-history.component.html'
})
export class InspectionHistoryComponent implements OnInit {
  private readonly inspectionService = inject(InspectionService);

  inspections: Inspection[] = [];
  loading = true;
  error = '';

  ngOnInit(): void {
    this.inspectionService.getInspections().subscribe({
      next: (inspections) => {
        this.inspections = inspections;
        this.loading = false;
      },
      error: (error: Error) => {
        this.error = error.message;
        this.loading = false;
      }
    });
  }
}
