export interface SearchResult {
  id: number,
  sacco_name: string;
  route_number: string;
  pickup_location: string;
  travel_time: string;
  fare: number,
  pickup_start_time: string;
  pickup_end_time: string;
  connections: number
} 