import React, { useEffect, useRef, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { VscHome } from "react-icons/vsc";
import { MdArrowDropDown } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import { BsMoon } from "react-icons/bs";
export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const dropDownRef = useRef();
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);
  const handleClickOutside = (e) => {
    if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
      setDropDown(false);
    }
  };
  return (
    <div className="z-50 fixed w-full bg-white flex items-center justify-between h-24 py-1 shadow-lg">
      <div className="absolute px-5 flex items-center">
        <FaFacebook className="text-7xl text-fb-blue-color cursor-pointer" />
        <div className="ml-3 flex items-center rounded-full bg-gray-200 p-5 cursor-pointer">
          <BsSearch className="text-2xl text-gray-600 " />
          <input
            type="text"
            placeholder="Search Facebook"
            className="bg-gray-200 text-2xl ml-3 outline-none"
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-center h-full">
        <div className="flex items-center justify-center w-28 h-full cursor-pointer rounded hover:bg-gray-100">
          <VscHome className="text-gray-600 text-5xl" />
        </div>
      </div>
      <div className="absolute right-0 flex px-5">
        <div
          onClick={() => {
            setDropDown(true);
          }}
          ref={dropDownRef}
          className="ml-3 rounded-full bg-gray-200 cursor-pointer p-2"
        >
          <MdArrowDropDown className="text-5xl text-black " />
        </div>
      </div>
      <DropItem isDropDown={dropDown} />
    </div>
  );
}

function DropItem({ isDropDown }) {
  return (
    isDropDown && (
      <div className="absolute top-full right-10 p-5 bg-white shadow-lg rounded w-96">
        <div className="pb-3 flex items-center border-b-2 border-gray-300">
          <div className="w-1/3 border-1 border-gray-200 rounded-full overflow-hidden cursor-pointer">
            <img src="/small.jpg" alt="" className="w-full rounded-full" />
          </div>
          <h3 className="ml-4 font-bold text-4xl">Ju Peng Ng</h3>
        </div>
        <div className="mt-2 rounded transition duration-100 w-full h-16 flex items-center p-2 select-none cursor-pointer hover:bg-gray-100">
          <div className="w-1/6 py-2 mr-2 rounded-full bg-gray-200 flex items-center justify-center">
            <CgLogOut className="text-4xl" />
          </div>
          <div className="w-5/6 font-medium text-2xl">Log Out</div>
        </div>
        <div className="mt-2 rounded transition duration-100 w-full h-16 flex items-center p-2 select-none cursor-pointer hover:bg-gray-100">
          <div className="w-1/6 py-2 mr-2 rounded-full bg-gray-200 flex items-center justify-center">
            <BsMoon className="text-4xl" />
          </div>
          <div className="w-5/6 font-medium text-2xl">Dark Mode</div>
          <div></div>
        </div>
      </div>
    )
  );
}
