import Faq from "@/components/faq/faq";
import Hero from "@/components/hero";
import Search from "@/components/search/search";
import VideoSeries from "@/components/videoseries/videoseries";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
     <Search />
    <Hero />
    <VideoSeries />
    <Faq />
    </main>
  );
}
