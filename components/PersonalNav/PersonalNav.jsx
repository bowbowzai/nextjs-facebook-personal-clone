import { IoMdAddCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
export default function PersonalNav() {
  return (
    <div className="flex justify-between h-15p w-full p-2">
      {/* left side */}
      <div className="flex">
        <div className="px-7 py-5 hover:bg-gray-100 cursor-pointer font-semibold text-3xl text-gray-800 rounded-lg">
          Post
        </div>
        <div className="px-7 py-5 hover:bg-gray-100 cursor-pointer font-semibold text-3xl text-gray-800 rounded-lg">
          Post
        </div>
      </div>
      {/* right side */}
      <div className="flex items-center justify-center ">
        <div className="flex mr-3 items-center bg-blue-600 py-3 px-4 rounded-lg cursor-pointer transform duration-100 select-none active:scale-95 hover:bg-blue-700">
          <IoMdAddCircle className="text-white text-3xl" />
          <span className="ml-2 text-white text-2xl font-medium">
            Add to Story
          </span>
        </div>
        <div className="flex items-center bg-gray-200 py-3 px-4 rounded-lg cursor-pointer transform duration-100 select-none active:scale-95 hover:bg-gray-300">
          <MdEdit className="text-black text-3xl" />
          <span className="ml-2 text-black text-2xl font-medium">
            Edit profile
          </span>
        </div>
      </div>
    </div>
  );
}
