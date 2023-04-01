import React from "react";
import image from "./media/myPhoto.png";

function TweetBox() {
  return (
    <div className="h-36 w-full tweetbox border-y border-black-200">
      <form>
        <div className="flex">
          <img
            src={image}
            alt="My Photo"
            className="h-16 w-16 rounded-full ml-4 mt-4"
          ></img>
          <input
            placeholder="What's happening?"
            className="w-full ml-4 placeholder-black font-normal text-2xl"
          ></input>
        </div>
        <div className="mt-4 grid grid-cols-6">
          <div className="text-xl flex ml-2 col-span-5">
            <input
              placeholder="Optional: Enter Image URL"
              className="placeholder-black font-normal text-2xl w-9/12"
            ></input>
          </div>
          <div className="">
            <button className="bg-blue-500 text-white text-base font-bold rounded-full w-28 h-10 w-auto opacity-50 justify-items-end">
              Tweet
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
