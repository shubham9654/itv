import React from "react";
import MovieSearch from "../search/Search";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-[1440px] h-[72px] flex items-center justify-between">
      <div className="flex gap-2">
        <span className="font-bold text-lg">Vigyan Tv</span>
        {/* <span>Browse</span> */}
      </div>
      <div>
        <MovieSearch />
      </div>
    </div>
  );
};

export default Navbar;
