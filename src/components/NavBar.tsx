"use client"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Menu as MenuIcon, Moon, Sun } from "lucide-react";
import NavLink from "./NavLink";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const NavBar = () => {
  const { theme, setTheme } = useTheme()
  return (
    <nav className="flex sticky top-0 z-30 bg-slate-900 items-center justify-between p-6 text-white">
      <div className="flex gap-2 items-center">
        <h1 className="text-4xl  lora">Escape</h1>

        {/* Theme Controller */}
        <button className="bg-slate-600 p-1 rounded-full" onClick={() => setTheme((prev) => !prev)}>
          {theme ? <Sun /> : <Moon />}
        </button>
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-6 uppercase text-sm tracking-wide">
        <li className="nav">
          <NavLink href="/">
            Home
          </NavLink>
        </li>
        <li className="nav">
          <NavLink href="/categories">
            Categories
          </NavLink>
        </li>
        <li className="nav">
          <NavLink href="/about" >
            About
          </NavLink>
        </li>
        <li className="nav">
          <NavLink href="/contact" >
            Contact
          </NavLink>
        </li>
        <li className="nav">
          <NavLink href="/new" >
            New-Post
          </NavLink>
        </li>
      </ul>

      {/* Mobile dropdown */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button type="button" aria-label="Open menu">
              <MenuIcon className="w-6 h-6 text-white" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="end" className="navContent">
            <DropdownMenuItem className="text-2xl text-white" asChild>
              <NavLink href="/" >
                HOME
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-2xl text-white" asChild>
              <NavLink href="/categories" >
                CATEGORIES
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-2xl text-white" asChild>
              <NavLink href="/about" >
                ABOUT
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-2xl text-white" asChild>
              <NavLink href="/contact" >
                CONTACT
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-2xl text-white" asChild>
              <NavLink href="/new" >
                NEW POST
              </NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default NavBar;
