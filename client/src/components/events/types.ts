export interface EventSummary {
  administrator_id: number,
  partner_id: number,
  address_id: number,
  name: string,
  description: string,
  start_date: string,
  end_date: string,
  day_of_week: number
  frequency: string,
  start_time: string
  end_time:string,
  hours_of_work: number,
  therapist_needed: number,
  color: string
}