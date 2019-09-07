export interface ClinicSummary {
  id: number,
  picture_url: string,
  name: string,
  description: string,
  color: string,
  date: string,
  start_time: string,
  end_time: string,
  therapist_needed: number,
  volunteers_registered: number,
  free_spots: number,
}