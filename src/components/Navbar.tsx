import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Search from "./Search";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">Afiliado Store</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1 gap-3">
            <div className="hidden lg:flex gap-3">
              <Search />
              <ModeToggle />
            </div>
            <div className="lg:hidden flex gap-3">
              <Search open={false} />
              <ModeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
};

export default Navbar;
