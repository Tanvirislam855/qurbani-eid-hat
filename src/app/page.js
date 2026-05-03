import Image from "next/image";
import Banner from "../components/Banner"
import TopGenerations from "@/components/TopGenerations";
import Testimonials from "@/components/Testimonials"
import 'animate.css';

export default function Home() {
  return (

    <div>
      <Banner/>
      <TopGenerations/>
      <Testimonials/>
    </div>
  );
}
