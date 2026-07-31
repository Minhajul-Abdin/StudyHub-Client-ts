
import RoomCard from "./roomCard";
import { fetchLatestRooms } from "@/lib/rooms/data";

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

const HomeRooms = async () => {
  const rooms: Room[] = await fetchLatestRooms();

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-12 py-15">
      <div className="max-w-5xl mx-auto">
        <div>
          <h1 className="text-2xl py-10 sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Latest Added Rooms
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rooms.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeRooms;

