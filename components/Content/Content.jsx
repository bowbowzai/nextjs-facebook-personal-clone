import { MdWork } from "react-icons/md";
import { HiOutlinePhotograph } from "react-icons/hi";
import Post from "../Post/Post";
export default function Content() {
  return (
    <div className="relative container mx-auto mt-5 bg-transparent flex">
      {/* left */}
      <div className="sticky top-28 w-1/3 min-h-screen h-96  min-h-screen">
        {/* intro */}
        <div className="border-1 border-gray-200 py-6 px-5 bg-white rounded-lg shadow">
          <div>
            <h3 className="text-3xl font-bold">Intro</h3>
            <div className="mt-3 flex items-center justify-start">
              <MdWork className="text-gray-500 text-4xl" />
              <span className="ml-5 text-2xl text-black">SJK(C) ON PONG</span>
            </div>
            <div className="mt-7 text-2xl py-3 flex items-center justify-center bg-gray-200 rounded-lg cursor-pointer transition duration-100 hover:bg-gray-300">
              Edit Details
            </div>
            <div className="mt-7 text-2xl py-3 flex items-center justify-center bg-gray-200 rounded-lg cursor-pointer transition duration-100 hover:bg-gray-300">
              Edit Details
            </div>
            <div className="mt-7 text-2xl py-3 flex items-center justify-center bg-gray-200 rounded-lg cursor-pointer transition duration-100 hover:bg-gray-300">
              Edit Details
            </div>
          </div>
        </div>
        {/* photos */}
        <div className="mt-10 border-1 border-gray-200 py-6 px-5 bg-white rounded-lg shadow">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-bold">Photos</h3>
              <a
                href=""
                className="inline-block h-full py-2 px-3 text-2xl text-blue-700 bg-transparent rounded-md hover:bg-gray-100"
              >
                See All Photos
              </a>
            </div>
            <div className="mt-5 w-full max-h-[448px] grid grid-cols-3 grid-rows-3 gap-x-2 gap-y-1">
              <div className="w-full overflow-hidden">
                <img
                  src="/small.jpg"
                  alt=""
                  className="w-full object-cover h-full"
                />
              </div>
              <div className="w-full overflow-hidden">
                <img
                  src="/big.jpg"
                  alt=""
                  className="w-full object-cover h-full"
                />
              </div>
              <div className="w-full overflow-hidden">
                <img
                  src="/img1.jpg"
                  alt=""
                  className="w-full object-cover h-full"
                />
              </div>
              <div className="w-full overflow-hidden">
                <img
                  src="/img2.jpg"
                  alt=""
                  className="w-full object-cover h-full"
                />
              </div>
              <div className="w-full overflow-hidden">
                <img
                  src="/img3.jpg"
                  alt=""
                  className="w-full object-cover h-full"
                />
              </div>
              <div className="w-full overflow-hidden">
                <img
                  src="/img4.jpg"
                  alt=""
                  className="w-full object-cover h-full"
                />
              </div>
              <div className="w-full overflow-hidden">
                <img
                  src="/img5.jpg"
                  alt=""
                  className="w-full object-cover h-full"
                />
              </div>
              <div className="w-full overflow-hidden">
                <img
                  src="/img6.jpg"
                  alt=""
                  className="w-full object-cover h-full"
                />
              </div>
              <div className="w-full overflow-hidden">
                <img
                  src="/img7.jpg"
                  alt=""
                  className="w-full object-cover h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="ml-10 w-2/3 h-auto pb-5">
        {/* post */}
        <div className="w-full pb-1 pt-4 px-4 bg-white border-1 border-gray-200 rounded-lg">
          <div className="pb-4 flex items-center border-b-1 border-gray-300">
            <div className="border-1 border-gray-300 w-10 overflow-hidden bg-gray-200 rounded-full cursor-pointer">
              <img
                src="/small.jpg"
                alt=""
                className="w-full rounded-full hover:opacity-80"
              />
            </div>
            <div className="ml-2 py-2 px-4 outline-none rounded-full bg-gray-100 w-full cursor-pointer text-xl text-gray-900 select-none hover:bg-gray-200">
              What&apos;s on your mind?
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="w-1/2 py-2 px-5 flex items-center justify-center cursor-pointer rounded-xl select-none hover:bg-gray-200">
              <HiOutlinePhotograph className="text-green-600 text-3xl" />
              <span className="ml-2 text-xl font-medium text-gray-600">
                Photo/Video
              </span>
            </div>
          </div>
        </div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
