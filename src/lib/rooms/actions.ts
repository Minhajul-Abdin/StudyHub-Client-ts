"use server";

import { headers } from "next/headers";
import { auth } from "../auth";

export const addRoom = async (formData: FormData) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const amenities = formData.getAll("amenities");

  const modifiedData = {
    userId: session?.user?.id,
    room_name: formData.get("roomName"),
    short_description: formData.get("description"),
    room_image_url: formData.get("image"),
    floor: formData.get("floor"),
    seat_capacity: formData.get("capacity"),
    hourly_rate: formData.get("hourlyRate"),
    amenities,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/rooms`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(modifiedData),
    },
  );

  if (!res.ok) return null;

  return await res.json();
};

export const deleteSeletedRoom = async (id: string) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/mybooking/${id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) return null;

  const data = await res.json();

  return data;
};

