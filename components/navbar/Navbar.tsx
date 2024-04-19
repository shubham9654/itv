import React from "react";
import MovieSearch from "../search/Search";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="px-2 mx-auto max-w-[1440px] h-[72px] flex items-center justify-between">
      <div className="flex gap-2">
        <Link href="/">
          <span className="font-bold text-2xl">iTv</span>
        </Link>
      </div>
      <div>
        <MovieSearch />
      </div>
    </div>
  );
};

export default Navbar;
