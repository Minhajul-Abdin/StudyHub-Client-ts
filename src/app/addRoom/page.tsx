
import { addRoom } from "../../lib/rooms/actions";
import { redirect } from "next/navigation";

export default function AddRoomPage() {
  const amenities = [
    "Whiteboard",
    "Projector",
    "Wi-Fi",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
  ];

  const handleAddRoom = async (formData: FormData) => {
  "use server";

  const data = await addRoom(formData);

  if (!data) {
    throw new Error("Failed to add room");
  }

  redirect("/rooms");
};

  return (
    <main className="min-h-screen bg-[#FAF8F5] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-[#8C6A55]">
            Room Management
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-[#3F3028] sm:text-4xl">
            Add a New Room
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#75665D] sm:text-base">
            Share your study room with others. Add the room details below and
            make your space available for booking.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-[#E6DDD5] bg-white p-5 shadow-sm sm:p-8">
          <form action={handleAddRoom} className="space-y-7">
            {/* Room Name */}
            <div>
              <label
                htmlFor="roomName"
                className="mb-2 block text-sm font-semibold text-[#4A3B32]"
              >
                Room Name
              </label>

              <input
                id="roomName"
                required
                name="roomName"
                type="text"
                placeholder="e.g. Quiet Study Room"
                className="w-full rounded-xl border border-[#DED4CC] bg-white px-4 py-3 text-sm text-[#3F3028] outline-none transition placeholder:text-[#A79A91] focus:border-[#8C6239] focus:ring-2 focus:ring-[#8C6239]/10"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-semibold text-[#4A3B32]"
              >
                Description
              </label>

              <textarea
                id="description"
                required
                name="description"
                rows={5}
                placeholder="Write a short description about the room..."
                className="w-full resize-none rounded-xl border border-[#DED4CC] bg-white px-4 py-3 text-sm leading-6 text-[#3F3028] outline-none transition placeholder:text-[#A79A91] focus:border-[#8C6239] focus:ring-2 focus:ring-[#8C6239]/10"
              />
            </div>

            {/* Image URL */}
            <div>
              <label
                htmlFor="image"
                className="mb-2 block text-sm font-semibold text-[#4A3B32]"
              >
                Image URL
              </label>

              <input
                id="image"
                required
                name="image"
                type="url"
                placeholder="https://example.com/image.jpg"
                className="w-full rounded-xl border border-[#DED4CC] bg-white px-4 py-3 text-sm text-[#3F3028] outline-none transition placeholder:text-[#A79A91] focus:border-[#8C6239] focus:ring-2 focus:ring-[#8C6239]/10"
              />
            </div>

            {/* Room Details */}
            <div>
              <h2 className="mb-4 text-base font-semibold text-[#4A3B32]">
                Room Details
              </h2>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {/* Floor */}
                <div>
                  <label
                    htmlFor="floor"
                    className="mb-2 block text-sm font-medium text-[#5F5149]"
                  >
                    Floor
                  </label>

                  <input
                    id="floor"
                    required
                    name="floor"
                    type="text"
                    placeholder="e.g. 3rd Floor"
                    className="w-full rounded-xl border border-[#DED4CC] px-4 py-3 text-sm text-[#3F3028] outline-none transition placeholder:text-[#A79A91] focus:border-[#8C6239] focus:ring-2 focus:ring-[#8C6239]/10"
                  />
                </div>

                {/* Capacity */}
                <div>
                  <label
                    htmlFor="capacity"
                    className="mb-2 block text-sm font-medium text-[#5F5149]"
                  >
                    Capacity
                  </label>

                  <input
                    id="capacity"
                    required
                    name="capacity"
                    type="number"
                    min="1"
                    placeholder="2"
                    className="w-full rounded-xl border border-[#DED4CC] px-4 py-3 text-sm text-[#3F3028] outline-none transition placeholder:text-[#A79A91] focus:border-[#8C6239] focus:ring-2 focus:ring-[#8C6239]/10"
                  />
                </div>

                {/* Hourly Rate */}
                <div>
                  <label
                    htmlFor="hourlyRate"
                    className="mb-2 block text-sm font-medium text-[#5F5149]"
                  >
                    Hourly Rate ($)
                  </label>

                  <input
                    id="hourlyRate"
                    required
                    name="hourlyRate"
                    type="number"
                    min="0"
                    placeholder="5"
                    className="w-full rounded-xl border border-[#DED4CC] px-4 py-3 text-sm text-[#3F3028] outline-none transition placeholder:text-[#A79A91] focus:border-[#8C6239] focus:ring-2 focus:ring-[#8C6239]/10"
                  />
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="mb-4 text-base font-semibold text-[#4A3B32]">
                Amenities
              </h2>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                {amenities.map((item) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#E3DAD2] bg-[#FCFAF8] px-4 py-3 transition hover:border-[#B99A7D] hover:bg-[#F8F2ED]"
                  >
                    <input
                      name="amenities"
                      type="checkbox"
                      value={item}
                      className="h-4 w-4 accent-[#8C6239]"
                    />

                    <span className="text-sm text-[#5F5149]">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end border-t border-[#EEE7E1] pt-6">
              <button
                type="submit"
                className="w-full rounded-xl bg-[#8C6239] px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#76502F] focus:outline-none focus:ring-2 focus:ring-[#8C6239]/30 sm:w-auto"
              >
                Publish Room
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

