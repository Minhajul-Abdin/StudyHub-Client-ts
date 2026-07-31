import { Button } from "@heroui/react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import RoomCard from "../../components/roomCard";
import Link from "next/link";

interface Room {
  _id: string;
  room_name: string;
  short_description: string;
  room_image_url: string;
  floor: string;
  seat_capacity: number;
  hourly_rate: number;
  amenities: string[];
  userId?: string;
}

export default async function Dashboard() {
  const requestHeaders = await headers();

  const { token } = await auth.api.getToken({
    headers: requestHeaders,
  });

  const session = await auth.api.getSession({
    headers: requestHeaders,
  });

  if (!session?.user?.id || !token) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-2xl border bg-slate-50 p-10 text-center">
          <h2 className="text-xl font-bold text-slate-800">
            Please log in to view your rooms
          </h2>

          <Link href="/login">
            <Button className="mt-5">Login</Button>
          </Link>
        </div>
      </div>
    );
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/mylisting/${session.user.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch listed rooms");
  }

  const rooms: Room[] = await res.json();

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <div className="mx-auto w-[90%] max-w-7xl py-12">
        <div className="w-full">
          <div className="mb-8">
            <p className="mb-1 text-sm font-medium uppercase tracking-wide text-[#8C6A55]">
              Room Management
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-[#3F3028]">
              My Listed Rooms
            </h1>

            <p className="mt-2 text-sm text-[#75665D]">
              Manage the study rooms you have listed on StudyNook.
            </p>
          </div>

          {rooms.length === 0 ? (
            <div className="rounded-2xl border border-[#E6DDD5] bg-white p-12 text-center shadow-sm">
              <h2 className="text-3xl font-bold text-[#4A3B32]">
                No Rooms Yet
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#75665D]">
                You havent listed any study rooms yet. Add your first room and
                make it available for others to book.
              </p>

              <Link href="/addRoom">
                <Button className="mt-6 rounded-xl bg-[#8C6239] px-6 font-semibold text-white hover:bg-[#76502F]">
                  Add Your Room
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rooms.map((room) => (
                <RoomCard key={room._id} room={room} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

