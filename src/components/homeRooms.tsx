import RoomCard from "./roomCard";
import { fetchLatestRooms } from "@/lib/rooms/data";

const HomeRooms = async () => {
  const rooms = await fetchLatestRooms();

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-12 py-15">
      <div className="max-w-5xl mx-auto">
        <div>
          {/* Heading */}
          <h1 className="text-2xl py-10 sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Latest Added Rooms
          </h1>
        </div>

        {/* Dynamic part */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rooms?.map((room) => (
            <RoomCard key={room?._id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeRooms;

