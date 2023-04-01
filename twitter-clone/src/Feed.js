import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
function Feed() {
  return (
    <div className="h-screen font-bold overflow-y-auto feed border-r border-black-200">
      <div className="top-part h-auto sticky top-0 backdrop-blur-3xl z-10">
        <div className="home m-2 h-4 flex text-xl">
          <h1>Home</h1>
        </div>
        <div className="twoOptions text-base flex justify-center h-10 mt-5">
          <div className="text-center w-1/2 hover:bg-neutral-200 pt-2">
            <p>For you</p>
          </div>
          <div className="text-center w-1/2 hover:bg-neutral-200 pt-2">
            <p>Following</p>
          </div>
        </div>
      </div>
      <div className = "bottom-part relative">
      <TweetBox />
      <Post displayName = "Levi Ackerman"/>
      <Post displayName = "Levi Ackerman" />
      <Post displayName = "Levi Ackerman" />
      </div>
    </div>
  );
}

export default Feed;
