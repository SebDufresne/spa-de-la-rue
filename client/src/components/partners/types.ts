export interface PartnerSummary {
  picture_url: string,
  name: string,
  description: string,
}

export interface ActivePartner {
  id: number,
  name: string,
  address_id: number,
  google_coords_x: number,
  google_coords_y: number
}