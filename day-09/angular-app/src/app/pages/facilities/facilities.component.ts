import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FacilityService } from '../../services/facility.service';
import { Facility } from '../../models/facility.model';

type SortKey = 'name' | 'cleanliness_score' | 'waste_level' | 'footfall';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.css'
})
export class FacilitiesComponent implements OnInit {
  private readonly facilityService = inject(FacilityService);

  facilities: Facility[] = [];
  searchTerm = '';
  locationFilter = '';
  sortKey: SortKey = 'name';
  ascending = true;
  loading = true;
  error = '';

  ngOnInit(): void {
    this.loadFacilities();
  }

  loadFacilities(): void {
    this.loading = true;
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

  get locations(): string[] {
    return [...new Set(this.facilities.map((facility) => facility.location))].sort();
  }

  get filteredFacilities(): Facility[] {
    const term = this.searchTerm.trim().toLowerCase();

    return [...this.facilities]
      .filter((facility) => {
        const matchesTerm = !term ||
          facility.name.toLowerCase().includes(term) ||
          facility.location.toLowerCase().includes(term);

        const matchesLocation = !this.locationFilter || facility.location === this.locationFilter;

        return matchesTerm && matchesLocation;
      })
      .sort((a, b) => {
        const first = this.sortValue(a, this.sortKey);
        const second = this.sortValue(b, this.sortKey);

        if (first < second) return this.ascending ? -1 : 1;
        if (first > second) return this.ascending ? 1 : -1;
        return 0;
      });
  }

  toggleSort(): void {
    this.ascending = !this.ascending;
  }

  private sortValue(facility: Facility, key: SortKey): string | number {
    if (key === 'name') return facility.name.toLowerCase();
    return facility[key] ?? 0;
  }
}
