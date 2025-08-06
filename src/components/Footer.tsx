"use client";
import { Input } from "./ui/input";
import NavLink from "./NavLink";
import { Button } from "./ui/button";
import { useTheme } from "@/context/ThemeContext";
const Footer = () => {
  const {theme} = useTheme()
  return (
    <section className="flex flex-col items-center bg-black/80">
      <p className="text-white font-bold pb-1 mb-2 border-b pt-10">
        Stay In Touch
      </p>
      <div className="flex w-full max-w-sm flex-col md:flex-row items-center pb-5 gap-2">
        <Input
          className="text-white/80 bg-black/40 px-4 md:mx-0"
          type="email"
          placeholder="Email"
        />
        <Button
          className="w-full md:w-auto hover:bg-amber-500 mx-4 md:mx-0"
          type="submit"
          variant={theme ? "outline" : "secondary"}
        >
          Subscribe
        </Button>
      </div>
      <div className="py-5 flex items-center justify-around flex-col md:flex-row  text-white/80 bg-black/70 w-full">
        <p className="font-bold lora text-2xl pb-3">Escape</p>
        <nav className="flex items-center gap-2 flex-col md:flex-row">
          <NavLink className="nav hover:underline" href="/">
            HOME
          </NavLink>
          <NavLink className="nav hover:underline" href="/categories">
            CATEGORIES
          </NavLink>
          <NavLink className="nav hover:underline" href="/about">
            ABOUT
          </NavLink>
          <NavLink className="nav hover:underline" href="/contact">
            CONTACT
          </NavLink>
        </nav>
      </div>
    </section>
  );
};

export default Footer;
