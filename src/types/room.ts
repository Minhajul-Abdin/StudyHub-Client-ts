export interface Room {
  _id: string;
  userId: string;
  room_name: string;
  bookCount?: number | undefined;
  short_description: string;
  room_image_url: string;
  floor: string;
  seat_capacity: number;
  hourly_rate: number;
  amenities?: string[];
}