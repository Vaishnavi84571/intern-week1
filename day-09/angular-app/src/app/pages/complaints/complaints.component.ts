import { Component, OnInit, inject } from '@angular/core';
import { ComplaintService } from '../../services/complaint.service';
import { Complaint } from '../../models/complaint.model';

@Component({
  selector: 'app-complaints',
  standalone: true,
  templateUrl: './complaints.component.html'
})
export class ComplaintsComponent implements OnInit {
  private readonly complaintService = inject(ComplaintService);

  complaints: Complaint[] = [];
  loading = true;
  error = '';

  ngOnInit(): void {
    this.loadComplaints();
  }

  loadComplaints(): void {
    this.loading = true;
    this.complaintService.getComplaints().subscribe({
      next: (complaints) => {
        this.complaints = complaints;
        this.loading = false;
      },
      error: (error: Error) => {
        this.error = error.message;
        this.loading = false;
      }
    });
  }

  resolve(complaint: Complaint): void {
    this.complaintService.updateComplaintStatus(complaint.id, 'Resolved').subscribe({
      next: (updated) => {
        complaint.status = updated.status;
      },
      error: (error: Error) => {
        this.error = error.message;
      }
    });
  }
}
