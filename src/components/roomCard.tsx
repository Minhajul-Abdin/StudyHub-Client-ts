import { Layers, Users } from "lucide-react";
import Link from "next/link";

type Room = {
  _id: string;
  room_name: string;
  short_description: string;
  room_image_url?: string;
  floor: string;
  seat_capacity: number;
  hourly_rate: number;
  amenities: string[];
};

type RoomCardProps = {
  room: Room;
};

export default function RoomCard({ room }: RoomCardProps) {
  const {
    _id,
    room_name,
    short_description,
    room_image_url,
    floor,
    seat_capacity,
    hourly_rate,
    amenities,
  } = room;

  const restCount = amenities?.length - 3;

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative">
        <img
          src={
            room_image_url ||
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          }
          alt={room_name}
          className="h-48 w-full object-fill"
        />

        <span className="absolute top-3 right-3 bg-black/70 text-white text-xl px-3 py-1 rounded-full">
          ${hourly_rate}/hr
        </span>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            {room_name}
          </h2>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed">
          {short_description}
        </p>

        <div className="flex flex-wrap gap-3 text-xs text-gray-600">
          <span className="flex items-center gap-1">
            <Layers size={14} /> {floor}
          </span>

          <span className="flex items-center gap-1">
            <Users size={14} /> {seat_capacity} Seats
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2">
          {amenities?.slice(0, 3).map((item, i) => (
            <span
              key={i}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
            >
              {item}
            </span>
          ))}

          <h1 className="text-sm text-muted">
            {restCount === 0 ? "" : `+ ${restCount} More`}
          </h1>
        </div>

        <Link href={`/rooms/${_id}`}>
          <button className="cursor-pointer w-full mt-2 bg-[#D7CCC8] hover:text-[#ffffff] hover:bg-[#ad8d7d] text-[#4E342E] py-2 rounded-xl text-sm font-medium transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

