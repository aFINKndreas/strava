export interface Photo {
  unique_id: string
  athlete_id: number
  activity_id: number
  activity_name: string
  post_id: string | null
  resource_state: number
  caption: string
  type: number
  source: number
  status: number
  uploaded_at: string
  created_at: string
  created_at_local: string
  urls: {
    [key: string]: string
  }
  sizes: { '2000': [] }
  default_photo: boolean
  location: number[]
}
