import Image from "next/image";
import Hero from "./componets/Hero";
import Banner from "./componets/Banner";
import Benefits from "./componets/Benefits";
import Applications from "./componets/Applications";
import CustomCarousel from "./componets/CustomCarousel";
import NewHero from "./componets/NewHero";
import Sections from "./componets/Sections";
import Projects from "./componets/Projects";
// 

export default function Home() {
  return (
    <>
    {/* <Hero/> */}
    <NewHero/>
    {/* <CustomCarousel/> */}
    <Banner/>
    {/* <Projects/> */}
    <Benefits/>

    {/* <Sections/> */}
    <Applications/>
    </>
  );
}
