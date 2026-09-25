import type { Facility } from './facility.model';

export interface Inspection {
  id: number;
  facility_id: number;
  inspector_id: number | null;
  inspection_date: string;
  score: number | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
  facility?: Facility;
}

export interface InspectionPayload {
  facility_id: number;
  inspector_id: number | null;
  inspection_date: string;
  score: number;
  notes: string;
}
