
import Image from "next/image";
import Banner from "../components/Banner"
import TopGenerations from "@/components/TopGenerations";
import Testimonials from "@/components/Testimonials"
import SortByPrice from "@/components/SortByPrice";
import 'animate.css';

export default function Home() {
  return (

    <div>
      <Banner/>
      <div className="flex justify-end mt-15 text-center px-10">
      <SortByPrice/>
      </div>
      <TopGenerations/>
      <Testimonials/>
    </div>
  );
}
