import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FaRegCommentAlt } from "react-icons/fa";
import Comment from "../Comment/Comment";
import React, { useRef, useState } from "react";

export default function Post() {
  const commentRef = useRef();
  return (
    <div className="w-full h-auto mt-5 border-1 border-gray-300 rounded-xl bg-white">
      {/* user info */}
      <div className="flex items-center px-3 py-2 border-b-1 border-gray-300">
        <div className="border-1 border-gray-300 w-10 overflow-hidden bg-gray-200 rounded-full cursor-pointer">
          <img
            src="/small.jpg"
            alt=""
            className="w-full rounded-full hover:opacity-80"
          />
        </div>
        <div className="ml-3">
          <h3 className="font-medium cursor-pointer hover:underline">
            Ju Peng Ng
          </h3>
          <span className="text-sm hover:underline cursor-pointer">
            Sepsatember 19,2021{" "}
          </span>
        </div>
      </div>

      {/* img/video */}
      <div className="flex justify-center w-full h-auto bg-white border-b-1 border-gray-300">
        <img src="/meme.jpg" alt="" className="w-9/12" />
      </div>
      <div className="px-4">
        {/* desc */}
        <div className="p-2">
          <div className="border-b-1 border-l-1 border-r-1 border-gray-300 p-3 rounded">
            {/* author */}
            <h3 className="inline font-bold hover:underline cursor-pointer text-2xl">
              那些年欠你的故事
            </h3>
            <br />
            <span className="text-md text-gray-700">
              Seepgtesrmber S1o9mSa atl oumf3:s22o PeudM ·{" "}
            </span>
            {/* desc */}
            <p className="mt-3 whitespace-pre-line text-xl">
              粪：能不能让我走？ IG: https://www.instagram.com/storyofyears/ 🌐:
              http://bit.ly/3yTY3dv 全马信誉最佳的娱乐平台只在1slot 一发
            </p>
          </div>
        </div>
        {/* who like */}
        <div className="flex items-center py-2 border-b-1 border-gray-300">
          <FcLike className="text-3xl" />
          <span className="ml-3 cursor-pointer hover:underline">
            JuPengNg, Jun Hao Tee
          </span>
        </div>
        {/* like n comment */}
        <div className="py-1 flex w-full items-center border-b-1 border-gray-300">
          <div className="w-1/2 py-2 flex items-center justify-center cursor-pointer rounded-lg duration-100 select-none hover:bg-gray-200">
            <FcLikePlaceholder className="text-3xl" />
            <span className="ml-3 font-medium text-gray-700 text-xl">Like</span>
          </div>
          <div
            onClick={() => {
              commentRef.current.focus();
            }}
            className="w-1/2 py-2 flex items-center justify-center cursor-pointer rounded-lg duration-100 select-none hover:bg-gray-200"
          >
            <FaRegCommentAlt className="text-3xl" />
            <span className="ml-3 font-medium text-gray-700 text-xl">
              Comment
            </span>
          </div>
        </div>
        {/* comment */}
        <div className="mt-3">
          <div className="flex">
            <div className="border-1 border-gray-300 w-14 overflow-hidden bg-gray-200 rounded-full cursor-pointer">
              <img
                src="/small.jpg"
                alt=""
                className="w-full rounded-full hover:opacity-80"
              />
            </div>
            <input
              ref={commentRef}
              placeholder="Add Comment Here..."
              className="ml-2 py-2 px-4 outline-none rounded-full bg-gray-100 w-full cursor-pointer text-xl text-gray-900 select-none hover:bg-gray-200"
            />
          </div>
          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  );
}
