import type { Metadata } from "next";

import Banner from "../components/banner";
import HomeRooms from "../components/homeRooms";
import RentalStatsSection from "../components/roomStats";
import SaveFavoritesBanner from "../components/homeSignIn";

export const metadata: Metadata = {
  title: "StudyNook| Home",
  description: "this is where we start",
};

export default function Home() {
  return (
    <>
      <Banner />
      <HomeRooms />
      <RentalStatsSection />
      <SaveFavoritesBanner />
    </>
  );
}

