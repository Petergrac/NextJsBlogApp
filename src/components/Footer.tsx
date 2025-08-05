"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
const Footer = () => {
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
          variant="outline"
        >
          Subscribe
        </Button>
      </div>
      <div className="py-5 flex items-center justify-around flex-col md:flex-row  text-white/80 bg-black/70 w-full">
        <p>Escape</p>
        <nav className="flex items-center gap-2 flex-col md:flex-row">
          <Link className="nav hover:underline" href="/">
            HOME
          </Link>
          <Link className="nav hover:underline" href="/categories">
            CATEGORIES
          </Link>
          <Link className="nav hover:underline" href="/about">
            ABOUT
          </Link>
          <Link className="nav hover:underline" href="/contact">
            CONTACT
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default Footer;
