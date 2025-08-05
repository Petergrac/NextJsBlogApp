"use client";
import NavBar from "./NavBar";
// ...existing code...

import { Button } from "./ui/button";

const HeroSection = ({ onScrollClick }: { onScrollClick: () => void }) => {
  return (
    <section
      className="w-full h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url('/img/hero1.jpg')` }}
    >
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 className="text-4xl sm:text-5xl lora md:text-6xl font-bold mb-4">
          Let&apos;s do it together.
        </h2>
        <p className="text-lg mb-6 max-w-2xl">
          We travel the world in search of stories. Come along for the ride.
        </p>
        <Button
          onClick={onScrollClick}
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          View Latest Posts
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
