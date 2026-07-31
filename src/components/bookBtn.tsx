"use client";

import {
  Button,
  Modal,
  Surface,
} from "@heroui/react";
import Link from "next/link";
import { useSession, authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

type Room = {
  _id?: string;
  status?: string;
  room_name?: string;
  room_image_url?: string;
};

type BookButtonProps = {
  room: Room;
};

export default function BookButton({ room }: BookButtonProps) {
  const { data: session } = useSession();

  const handleBooking = async () => {
    const { data: jwtData } = await authClient.token();
    const token = jwtData?.token;

    if (!token) {
      return;
    }

    const updatedData = {
      status: room?.status,
      userId: session?.user?.id,
      bookerName: session?.user?.name,
      bookerEmail: session?.user?.email,
      roomTitle: room?.room_name,
      roomImage: room?.room_image_url,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/mybookings/${room?._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
      }
    );

    console.log(res);

    const data = await res.json();

    if (!data) {
      toast.error("Something went wrong");
      return;
    }

    console.log(data);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      {session ? (
        <>
          <Modal>
            <Button className="w-full mt-6 bg-[#D7CCC8] hover:text-[#ffffff] hover:bg-[#ad8d7d] text-[#4E342E] font-medium py-3 px-4 rounded-xl shadow-sm transition flex items-center justify-center gap-2 text-sm md:text-base">
              Book Now
            </Button>

            <Modal.Backdrop>
              <Modal.Container placement="auto">
                <Modal.Dialog className="sm:max-w-md">
                  <Modal.CloseTrigger />

                  <Modal.Header>
                    <div>
                      <h2 className="text-xl uppercase font-bold">
                        {room?.room_name}
                      </h2>

                      <p className="text-muted">
                        Reserve your place
                      </p>
                    </div>
                  </Modal.Header>

                  <Modal.Body>
                    <Surface variant="default">
                      <form className="space-y-4">
                        <div>
                          <label className="block mb-2 text-sm font-medium text-[#3a342d]">
                            Date
                          </label>

                          <input
                            type="date"
                            className="w-full rounded-xl bg-[#1d140f] border border-[#5a4334] px-4 py-3 text-white placeholder:text-[#9c8575] focus:outline-none focus:ring-2 focus:ring-[#c28b52]"
                            name="date"
                            defaultValue={today}
                          />
                        </div>

                        {/* Grid Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          {/* Capacity */}
                          <div>
                            <label className="block mb-2 text-sm font-medium text-[#3a342d]">
                              Capacity
                            </label>

                            <input
                              required
                              name="capacity"
                              type="number"
                              placeholder="2"
                              className="w-full rounded-xl bg-[#1d140f] border border-[#5a4334] px-4 py-3 text-white placeholder:text-[#9c8575] focus:outline-none focus:ring-2 focus:ring-[#c28b52]"
                            />
                          </div>

                          {/* Hourly Rate */}
                          <div>
                            <label className="block mb-2 text-sm font-medium text-[#3a342d]">
                              Hourly Rate ($)
                            </label>

                            <input
                              required
                              name="hourlyRate"
                              type="number"
                              placeholder="5"
                              className="w-full rounded-xl bg-[#1d140f] border border-[#5a4334] px-4 py-3 text-white placeholder:text-[#9c8575] focus:outline-none focus:ring-2 focus:ring-[#c28b52]"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-[#3a342d]"
                          >
                            Special Note
                          </label>

                          <textarea
                            name="note"
                            rows={3}
                            placeholder="Could you please..."
                            className="w-full rounded-xl bg-[#1d140f] border border-[#5a4334] px-4 py-3 text-white placeholder:text-[#9c8575] focus:outline-none focus:ring-2 focus:ring-[#c28b52]"
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-xl text-[#3a342d] font-bold">
                            Estimated Total
                          </div>

                          <div className="text-3xl text-[#3a342d] font-bold">
                            $5
                          </div>
                        </div>

                        <Modal.Footer>
                          <Button
                            className="border bg-white border-[#D7CCC8] text-[#4E342E] font-medium py-3 px-4 rounded-xl shadow-sm transition flex items-center justify-center gap-2 text-sm md:text-base"
                            slot="close"
                            variant="secondary"
                          >
                            Cancel
                          </Button>

                          <Button
                            className="bg-[#D7CCC8] hover:text-[#ffffff] hover:bg-[#ad8d7d] text-[#4E342E] font-medium py-3 px-4 rounded-xl shadow-sm transition flex items-center justify-center gap-2 text-sm md:text-base"
                            onClick={handleBooking}
                            slot="close"
                          >
                            Book
                          </Button>
                        </Modal.Footer>
                      </form>
                    </Surface>
                  </Modal.Body>
                </Modal.Dialog>
              </Modal.Container>
            </Modal.Backdrop>
          </Modal>
        </>
      ) : (
        <Link href="/login">
          <Button className="w-full mt-6 bg-[#D7CCC8] hover:text-[#ffffff] hover:bg-[#ad8d7d] text-[#4E342E] font-medium py-3 px-4 rounded-xl shadow-sm transition flex items-center justify-center gap-2 text-sm md:text-base">
            Login to Book
          </Button>
        </Link>
      )}
    </div>
  );
}

