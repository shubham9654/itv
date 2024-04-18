import React from "react";
import MovieSearch from "../search/Search";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-[1440px] h-[72px] flex items-center justify-between">
      <div className="flex gap-2">
        <span>Browse</span>
        <span>Browse</span>
      </div>
      <div>
        <MovieSearch />
      </div>
    </div>
  );
};

export default Navbar;
