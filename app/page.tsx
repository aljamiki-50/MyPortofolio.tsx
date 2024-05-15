import FavProjects from "@/components/FavProjects/FavProjects";
import Footer from "@/components/Footer/Footer";
import SecTwo from "@/components/SectionTwo/SecTwo";
import AboutSec from "@/components/aboutSec/AboutSec";
import Hero from "@/components/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" max-w-7xl w-full  px-4 md:px-8 mx-auto">
      <Hero />
      <SecTwo />
      <AboutSec />
      <FavProjects />
      <Footer />
    </div>
  );
}
