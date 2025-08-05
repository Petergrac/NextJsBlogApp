import React from 'react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Menu as MenuIcon } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (
      <nav className="flex bg-slate-900 items-center justify-between p-6 text-white">
        <h1 className="text-4xl  lora">Escape</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 uppercase text-sm tracking-wide">
          <li className="nav">
            <Link href="/" passHref>
              Home
            </Link>
          </li>
          <li className="nav">
            <Link href="/categories" passHref>
              Categories
            </Link>
          </li>
          <li className="nav">
            <Link href="/about" passHref>
              About
            </Link>
          </li>
          <li className="nav">
            <Link href="/contact" passHref>
              Contact
            </Link>
          </li>
          <li className="nav">
            <Link href="/new" passHref>
              New-Post
            </Link>
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
            <DropdownMenuContent
              side="bottom"
              align="end"
              className="navContent"
            >
              <DropdownMenuItem className='text-2xl text-white' asChild>
                <Link href="/" passHref>
                  HOME
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className='text-2xl text-white'  asChild>
                <Link href="/categories" passHref>
                  CATEGORIES
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className='text-2xl text-white'  asChild>
                <Link href="/about" passHref>
                  ABOUT
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className='text-2xl text-white'  asChild>
                <Link href="/contact" passHref>
                  CONTACT
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className='text-2xl text-white'  asChild>
                <Link href="/new" passHref>
                  NEW POST
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
  )
}

export default NavBar