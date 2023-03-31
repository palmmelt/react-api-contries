import React from "react";

const Navbar = () => {
  return (
    <nav
      className="flex z-50 justify-between items-center w-full h-14 shadow-black shadow-sm
     px-4 md:px-[calc(30%-18vmin)] py-1 text-white bg-[#000000fa] sticky top-0"
    >
      <div className="">
        <h1 className="text-[calc(120%+0.8vmin)] text-[#0b85f8]">
          <a href="/">
            PALMMELT
            <i className="fa-solid fa-code" />
          </a>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
