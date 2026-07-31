import { Layers, Users, Clock, CheckCircle2 } from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import BookButton from "@/components/bookBtn";
import EditAddedRoom from "@/components/editModal";
import DeleteAlert from "@/components/DeleteAlert";

type Room = {
  _id: string;
  room_name: string;
  bookCount: number;
  short_description: string;
  room_image_url: string;
  floor: string;
  seat_capacity: number;
  hourly_rate: number;
  amenities: string[];
  // Add any properties that EditAddedRoom expects
  [key: string]: unknown;
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const fetchSingleRoom = async (
  id: string,
  token?: string,
): Promise<Room | null> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/rooms/${id}`,
    {
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    },
  );

  if (!res.ok) {
    return null;
  }

  const data: Room = await res.json();

  return data;
};

export default async function StudyNookDetail({
  params,
}: PageProps) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { id } = await params;

  const room = await fetchSingleRoom(id);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Room not found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#5C4033] font-sans antialiased p-4 md:p-8 lg:p-12">

      {/* Owner Actions */}
      {session?.user.id === room.userId && (
        <div className="flex justify-end gap-2">
          <EditAddedRoom room={room} />
          <DeleteAlert room={room} />
        </div>
      )}

      <div className="max-w-6xl py-15 mx-auto">

        {/* Heading */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <h1 className="text-3xl md:text-4xl font-serif tracking-tight text-[#8C6239]">
            {room.room_name}
          </h1>

          <span className="inline-flex items-center gap-1 bg-[#E2ECE4] text-[#4A6B53] text-xs font-medium px-2.5 py-1 rounded-full border border-[#D0DFD3]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {room.bookCount ?? 0} bookings
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">

            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img
                src={room.room_image_url}
                alt={room.room_name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full">
              <p className="text-xs text-neutral-400 mb-2">
                Listed {room.room_name}
              </p>

              <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                {room.short_description}
              </p>
            </div>

            <hr className="border-neutral-200" />

            <div>
              <h3 className="text-lg font-semibold mb-3 text-[#8C6239]">
                Amenities
              </h3>

              <div className="flex flex-wrap gap-2">
                {room.amenities?.map((amenity, index) => (
                  <span
                    key={index}
                    className="bg-[#D1DDD3] text-[#3F5A46] text-sm font-medium px-4 py-2 rounded-full"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">

            <div className="bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 border border-[#E1D0BA] shadow-sm flex flex-col justify-between min-h-[280px]">

              <div>
                <div className="flex items-baseline justify-between mb-6">
                  <span className="text-4xl font-serif text-[#8C6239]">
                    ${room.hourly_rate}
                  </span>

                  <span className="text-sm text-neutral-500 font-light">
                    per hour
                  </span>
                </div>

                <div className="space-y-3 text-sm text-neutral-700">

                  <div className="flex items-center gap-3">
                    <Layers className="w-4 h-4 text-neutral-500" />
                    <span>{room.floor}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-neutral-500" />
                    <span>{room.seat_capacity} People</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-neutral-500" />
                    <span>Available times</span>
                  </div>

                </div>
              </div>

              <BookButton room={room} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}