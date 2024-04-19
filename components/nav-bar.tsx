import React from "react";
import Image from "next/image";
import { TbMenu } from "react-icons/tb";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between px-48 py-3 border-b border-gray-700">
      <div className="flex flex-row text-center items-center">
        <div>
          <TbMenu className="text-5xl text-center justify-center" />
        </div>
        <div className="text-center items-center">
          <h1 className="text-2xl">dropset</h1>
        </div>
      </div>
      <div className="">
        <button className=" bg-slate-900 px-12 py-2 rounded-md">
          Download
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
