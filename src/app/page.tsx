"use client"
import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import MostRecent from "@/components/MostRecent";
import { useRef } from "react";

export default function Home() {

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollToRecent = ()=>{
    scrollRef.current?.scrollIntoView({behavior: 'smooth'})
  }
  return (
    <div className="overflow-hidden">
      <HeroSection onScrollClick={handleScrollToRecent} />
      <Featured />
      <MostRecent ref={scrollRef}/>
    </div>
  );
}
