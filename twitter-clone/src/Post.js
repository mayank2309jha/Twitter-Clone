import React from "react";
import photo from "./media/wp8202714.jpg";
import picture from "././media/wp2835458.webp";
import { SlBubble } from "react-icons/sl";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { SlGraph } from "react-icons/sl";
import { IoShareOutline } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa";

function Post({ displayName, userName, verified, text, image, avatar }) {
  return (
    <div className="post h-auto border-y border-black-200 hover:bg-neutral-100 pt-4">
      <div className="flex">
        <div className="photo h-32 w-20 basis-20">
          <img
            src={photo}
            alt="My Photo"
            className="h-16 w-16 rounded-full mt-2 ml-3 mr-1"
          ></img>
        </div>
        <div className="tweet h-auto flex-grow basis-10">
          <div className="names flex flex-grow h-auto">
            <h1 className="text-xl ml-2">Levi Ackerman</h1>
            <h1 className="text-lg ml-2 font-light text-gray-500">
              @realCaptain_levi
            </h1>
          </div>
          <div className="text h-auto w- ml-2 overflow-hidden pb-4 flex-col">
            <p className="text-left font-normal text-lg pb-2">
              On a adventurous expedition outside the walls. Look what I found
              today, two titans fighting an Ackerman girl. Just what we need in
              the Survey Corps.
            </p>
            <img src={picture} className="h-96 flex-grow rounded-2xl"></img>
          </div>
          <div className="icons flex grid grid-cols-6 font-normal">
            <div className="comment flex align-middle">
              <SlBubble />
              <p className = "relative bottom-1 left-1">Comment</p>
            </div>
            <div className="retweet flex">
              <FaRetweet />
              <p className = "relative bottom-1 left-1">Retweet</p>
            </div>
            <div className="like flex">
              <AiOutlineHeart />
              <p className = "relative bottom-1 left-1">Like</p>
            </div>
            <div className="view flex">
              <SlGraph />
              <p className = "relative bottom-1 left-1">View</p>
            </div>
            <div className="share flex">
              <IoShareOutline />
              <p className = "relative bottom-1 left-1">Share</p>
            </div>
            <div className="tip flex">
              <FaMoneyBillWave />
              <p className = "relative bottom-1 left-1">Tip</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
