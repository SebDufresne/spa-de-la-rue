export interface PartnerSummary {
  picture_url: string,
  name: string,
  description: string,
}

export interface ActivePartner {
  id: number,
  name: string,
  address_id: number,
  google_coords_X: number,
  google_coords_Y: number
}