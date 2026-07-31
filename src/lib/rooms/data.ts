export const fetchRooms = async (searchTerm: string = "") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/rooms?search=${searchTerm}`,
  );

  const data = await res.json();

  return data || [];
};

export const fetchLatestRooms = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/latest`,
  );

  const data = await res.json();

  return data || [];
};

