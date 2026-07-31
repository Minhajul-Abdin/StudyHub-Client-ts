import RoomCard from "../../components/roomCard";
import { fetchRooms } from "@/lib/rooms/data";
import SearchBar from "../../components/searchBar";

interface SearchParams {
  search?: string;
}

interface AllRoomsProps {
  searchParams: Promise<SearchParams>;
}

interface Room {
  _id: string;
  room_name: string;
  short_description: string;
  room_image_url: string;
  floor: string;
  seat_capacity: number;
  hourly_rate: number;
  amenities: string[];
}

export default async function AllRooms({
  searchParams,
}: AllRoomsProps) {
  const sParams = await searchParams;

  const rooms: Room[] = await fetchRooms(sParams.search || "");

  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            Explore Our Rooms
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Find the perfect study space for your next session. Explore
            comfortable, well-equipped rooms and book the one that suits you.
          </p>

          {/* Search */}
          <SearchBar />

          <div className="py-6">
            <h2 className="text-xl font-bold text-[#4A3B32]">
              Available Rooms
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {rooms.length} {rooms.length === 1 ? "room" : "rooms"} available
            </p>
          </div>
        </div>

        {/* Rooms */}
        {rooms.length === 0 ? (
          <div className="rounded-2xl border border-[#E6DDD5] bg-[#FAF8F5] px-6 py-16 text-center">
            <h3 className="text-2xl font-bold text-[#4A3B32]">
              No Rooms Found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm text-[#75665D]">
              We couldnt find any rooms matching your search. Try a different
              search term.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <RoomCard key={room._id} room={room} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

