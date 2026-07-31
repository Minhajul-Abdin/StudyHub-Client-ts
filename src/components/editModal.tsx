"use client";

import { Button, Modal, Surface } from "@heroui/react";
import { redirect } from "next/navigation";
import type { FormEvent } from "react";

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
};

type EditAddedRoomProps = {
  room: Room;
};

export default function EditAddedRoom({
  room,
}: EditAddedRoomProps) {
  const amenitiesAll: string[] = [
    "Whiteboard",
    "Projector",
    "Wi-Fi",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
  ];

  const {
    _id,
    room_name,
    bookCount,
    short_description,
    room_image_url,
    floor,
    seat_capacity,
    hourly_rate,
    amenities,
  } = room;

  const handleEditRoom = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const amenities = formData.getAll("amenities");

    const roomData = {
      room_name: formData.get("roomName"),
      short_description: formData.get("description"),
      room_image_url: formData.get("image"),
      floor: formData.get("floor"),
      seat_capacity: formData.get("capacity"),
      hourly_rate: formData.get("hourlyRate"),
      amenities,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/rooms/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(roomData),
      }
    );

    const data = await res.json();

    console.log(data);

    redirect(window.location.pathname);
  };

  return (
    <Modal>
      <Button className="btn rounded-xl border-[#4A3B32] text-[#4A3B32] btn-outline border-outline">
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header className="my-1">
              <h2 className="text-xl uppercase font-bold">
                Edit Your listed room
              </h2>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                  onSubmit={handleEditRoom}
                  className="space-y-6"
                >
                  {/* Room Name */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-[#3a342d]">
                      Room Name
                    </label>

                    <input
                      defaultValue={room_name}
                      required
                      name="roomName"
                      type="text"
                      placeholder="Enter room name"
                      className="w-full rounded-xl bg-[#1d140f] border border-[#5a4334] px-4 py-3 text-white placeholder:text-[#9c8575] focus:outline-none focus:ring-2 focus:ring-[#c28b52]"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-[#3a342d]">
                      Description
                    </label>

                    <textarea
                      defaultValue={short_description}
                      required
                      name="description"
                      rows={5}
                      placeholder="Write a short description..."
                      className="w-full rounded-xl bg-[#1d140f] border border-[#5a4334] px-4 py-3 text-white placeholder:text-[#9c8575] focus:outline-none focus:ring-2 focus:ring-[#c28b52]"
                    />
                  </div>

                  {/* Image URL */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-[#3a342d]">
                      Image URL
                    </label>

                    <input
                      defaultValue={room_image_url}
                      required
                      name="image"
                      type="text"
                      placeholder="https://example.com/image.jpg"
                      className="w-full rounded-xl bg-[#1d140f] border border-[#5a4334] px-4 py-3 text-white placeholder:text-[#9c8575] focus:outline-none focus:ring-2 focus:ring-[#c28b52]"
                    />
                  </div>

                  {/* Grid Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Floor */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-[#3a342d]">
                        Floor
                      </label>

                      <input
                        defaultValue={floor}
                        required
                        name="floor"
                        type="text"
                        placeholder="e.g. 3rd Floor"
                        className="w-full rounded-xl bg-[#1d140f] border border-[#5a4334] px-4 py-3 text-white placeholder:text-[#9c8575] focus:outline-none focus:ring-2 focus:ring-[#c28b52]"
                      />
                    </div>

                    {/* Capacity */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-[#3a342d]">
                        Capacity
                      </label>

                      <input
                        defaultValue={seat_capacity}
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
                        defaultValue={hourly_rate}
                        required
                        name="hourlyRate"
                        type="number"
                        placeholder="5"
                        className="w-full rounded-xl bg-[#1d140f] border border-[#5a4334] px-4 py-3 text-white placeholder:text-[#9c8575] focus:outline-none focus:ring-2 focus:ring-[#c28b52]"
                      />
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-[#3a342d]">
                      Amenities
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {amenitiesAll.map((item, index) => (
                        <label
                          key={index}
                          className="flex items-center gap-3 rounded-xl border border-[#5a4334] bg-[#241812] px-4 py-3 cursor-pointer hover:border-[#c28b52] transition"
                        >
                          <input
                            name="amenities"
                            type="checkbox"
                            defaultChecked={amenities?.includes(item)}
                            value={item}
                            className="w-4 h-4 accent-[#c28b52]"
                          />

                          <span className="text-sm text-[#f1dfcb]">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <Modal.Footer>
                    <Button type="submit" slot="close">
                      Edit
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

