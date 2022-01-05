import React from "react";

import logo from "../../Assets/Stamp.svg";
import wavesOpacity from "../../Assets/wavesOpacity.svg";

const Navbar = () => {
  return (
    <>
      <img src={wavesOpacity} className="md:hidden" />
      <div class="px-6 py-3 flex flex-row justify-center md:justify-between md:items-center">
        <div className="flex flex-row h-[3.5rem] items-center justify-center md:justify-start ">
          <img src={logo} alt="logo" className="h-full ml-[-1rem] md:ml-0" />
          <h1
            style={{
              fontFamily: "Mulish, sans-serif",
              fontWeight: "800",
              fontSize: "1.3rem",
              fontStyle: "bold",
            }}
            className="text-canary-black font-bold"
          >
            Canary Tutors
          </h1>
        </div>
        <div className="hidden md:inline">
          <h1 className="text-canary-black">Hello</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
