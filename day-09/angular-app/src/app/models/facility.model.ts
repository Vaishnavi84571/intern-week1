import type { Complaint } from './complaint.model';
import type { Inspection } from './inspection.model';

export interface Facility {
  id: number;
  name: string;
  location: string;
  cleanliness_score: number | null;
  odor_score: number | null;
  waste_level: number | null;
  water_availability: boolean;
  footfall: number;
  created_at: string;
  updated_at: string;
  inspections?: Inspection[];
  complaints?: Complaint[];
}
