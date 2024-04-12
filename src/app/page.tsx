import Image from "next/image";
import Hero from "./componets/Hero";
import Banner from "./componets/Banner";
import Benefits from "./componets/Benefits";
import Applications from "./componets/Applications";
import CustomCarousel from "./componets/CustomCarousel";

export default function Home() {
  return (
    <>
    <Hero/>
    <CustomCarousel/>
    <Banner/>
    <Benefits/>
    <Applications/>
    </>
  );
}
