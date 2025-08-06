"use client";
import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import MostRecent from "@/components/MostRecent";
import { useTheme } from "@/context/ThemeContext";
import { useRef} from "react";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const {theme} = useTheme()
  const handleScrollToRecent = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={theme ? "" : "dark"}>
      <HeroSection onScrollClick={handleScrollToRecent} />
      <Featured />
      <MostRecent ref={scrollRef} />
    </div>
  );
}
