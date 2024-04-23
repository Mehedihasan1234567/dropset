import React from "react";
import Image from "next/image";
import { TbMenu } from "react-icons/tb";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between md:px-48 px-4 py-3 border-b border-gray-500 sticky top-0 bg-black">
      <div className="flex flex-row text-center items-center ">
        <div>
          <TbMenu className="text-5xl text-white" />
        </div>
        <div className="text-center items-center">
          <h1 className="text-2xl text-white">dropset</h1>
        </div>
      </div>
      <div className="">
        <button className="text-white bg-slate-900 px-12 py-2 rounded-md">
          Download
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
