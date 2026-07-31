import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import CancelBookButton from "../../components/CancelBookButton";
import Link from "next/link";

interface Booking {
  _id: string;
  roomImage: string;
  roomTitle: string;
  bookAt: string;
  status: "Approved" | "Pending" | "Cancelled" | string;
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
            Please log in to view your bookings
          </h2>

          <Link href="/login">
            <Button className="mt-5">Login</Button>
          </Link>
        </div>
      </div>
    );
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/myBookings/${session.user.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch bookings");
  }

  const bookings: Booking[] = await res.json();

  return (
    <div className="mx-auto w-[80%] py-12">
      <div className="w-full">
        <h1 className="mb-6 text-3xl font-bold">My Booked Rooms</h1>

        {bookings.length === 0 ? (
          <div className="rounded-2xl border bg-slate-50 p-12 text-center">
            <p className="mb-10 text-4xl font-semibold text-slate-600">
              No Bookings Yet
            </p>

            <Link href="/rooms">
              <Button>Browse Rooms</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((book: Booking) => (
              <div
                key={book._id}
                className="flex gap-4 rounded-xl border bg-white p-4"
              >
                <Image
                  src={book.roomImage}
                  alt={book.roomTitle}
                  width={120}
                  height={90}
                  className="rounded-lg object-cover"
                />

                <div className="flex grow flex-col justify-between">
                  <div>
                    <h3 className="font-bold">{book.roomTitle}</h3>

                    <p className="text-sm text-slate-500">
                      Booked: {new Date(book.bookAt).toDateString()}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <Chip
                      color={
                        book.status === "Approved"
                          ? "success"
                          : book.status === "Cancelled"
                            ? "danger"
                            : "warning"
                      }
                      size="sm"
                    >
                      {book.status}
                    </Chip>

                    <CancelBookButton bookId={book._id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}