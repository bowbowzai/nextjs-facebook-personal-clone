import React from "react";
import Avatar from "../Avatar/Avatar";
import PersonalNav from "../PersonalNav/PersonalNav";

export default function Main() {
  return (
    <div className="w-full h-auto bg-gradient-to-b from-gray-300 to-white shadow-md">
      <div className="container mx-auto h-full">
        <div>
          <Avatar />
          {/* name */}
          <div className="flex items-center justify-center h-40 w-full border-b-2 border-gray-300">
            <h2 className="text-5xl font-bold">Ju Peng Ng</h2>
          </div>
          <PersonalNav />
        </div>
      </div>
    </div>
  );
}
