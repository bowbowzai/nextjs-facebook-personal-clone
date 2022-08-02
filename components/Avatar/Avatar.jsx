import React, { useEffect, useRef, useState } from "react";
import { AiOutlineUser, AiFillCamera } from "react-icons/ai";
import { BiImage } from "react-icons/bi";

export default function Avatar() {
  const changeAvaRef = useRef();
  const changeCovRef = useRef();
  const [isUploadVisible, setIsUploadVisible] = useState(false);
  const [isChgCover, setIsChgCover] = useState(false);
  useEffect(() => {
    document.addEventListener("click", handleClickOutsideAva, false);
    document.addEventListener("click", handleClickOutsideCov, false);
    return () => {
      document.removeEventListener("click", handleClickOutsideAva, false);
      document.removeEventListener("click", handleClickOutsideCov, false);
    };
  }, []);
  const handleClickOutsideAva = (e) => {
    if (changeAvaRef.current && !changeAvaRef.current.contains(e.target)) {
      setIsUploadVisible(false);
    }
  };
  const handleClickOutsideCov = (e) => {
    if (changeCovRef.current && !changeCovRef.current.contains(e.target)) {
      setIsChgCover(false);
    }
  };
  const updateProfileImg = (e) => {
    console.log(e);
  };
  return (
    <div className="relative w-full h-65vh rounded-2xl">
      <div className="overflow-hidden w-full h-65vh ">
        <img src="/big.jpg" alt="" className="w-full h-auto" />
      </div>
      {/* avatar */}
      <div
        ref={changeAvaRef}
        onClick={() => {
          setIsUploadVisible((oldState) => !oldState);
        }}
        className="cursor-pointer absolute -bottom-5 left-50 transform -translate-x-1/2 w-64 h-64 bg-white rounded-full p-2 active:p-2.5"
      >
        <div className="w-full h-full rounded-full border-2 border-1 border-gray-200 bg-gray-600 overflow-hidden">
          <img
            draggable="false"
            src="/small.jpg"
            alt=""
            className="transition duration-200 user-drag w-full h-full rounded-full opacity-100 active:opacity-40 hover:opacity-90"
          />
        </div>
      </div>
      {/* Edit cover */}
      <div
        ref={changeCovRef}
        onClick={() => {
          setIsChgCover((oldState) => !oldState);
        }}
        className="absolute bottom-5 right-5 p-3 rounded-lg transition duration-200 bg-gray-100 cursor-pointer transform hover:bg-gray-200 active:scale-90 select-none"
      >
        <div className="flex items-center">
          <AiFillCamera className="text-4xl text-black " />
          <span className="px-2 text-xl font-medium">Edit cover photo</span>
        </div>
      </div>
      {isUploadVisible && (
        <div className="absolute w-96 h-auto bg-white -bottom-40 left-50 transform -translate-x-1/2 p-3 rounded-2xl shadow-md text-2xl">
          <div className="flex items-center py-6 px-2 w-full h-10 rounded-md bg-white cursor-pointer hover:bg-gray-200">
            <AiOutlineUser />
            <span className="px-2">View Profile Picture</span>
          </div>
          <div className="flex items-center py-6 px-2 w-full h-10 rounded-md bg-white cursor-pointer hover:bg-gray-200">
            <BiImage />
            <span className="px-2">View Profile Picture</span>
          </div>
        </div>
      )}
      {isChgCover && (
        <div className="absolute w-96 h-auto bg-white top-full right-4 transform p-3 rounded-2xl shadow-md text-2xl">
          <div className="flex items-center py-6 px-2 w-full h-10 rounded-md bg-white cursor-pointer hover:bg-gray-200">
            <AiOutlineUser />
            <span className="px-2">View Profile Picture</span>
          </div>
          <div className="flex items-center py-6 px-2 w-full h-10 rounded-md bg-white cursor-pointer hover:bg-gray-200">
            <BiImage />
            <span className="px-2">View Profile Picture</span>
          </div>
        </div>
      )}
    </div>
  );
}
