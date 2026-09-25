import type { Facility } from './facility.model';

export interface Complaint {
  id: number;
  facility_id: number;
  user_id: number | null;
  complaint_text: string;
  status: string;
  created_at: string;
  updated_at: string;
  facility?: Facility;
}
