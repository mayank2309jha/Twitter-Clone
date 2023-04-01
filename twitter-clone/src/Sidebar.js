import React from "react";
import { FaTwitter } from "react-icons/fa";
import { RiHome7Fill} from "react-icons/ri";
import { FaHashtag } from "react-icons/fa";
import {BiBell} from "react-icons/bi";
import {BsEnvelope} from "react-icons/bs";
import {BsBookmark} from "react-icons/bs";
import {MdOutlinePerson} from "react-icons/md";
import {FiMoreHorizontal} from "react-icons/fi";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar h-screen p-2 border border-black-8">
      <FaTwitter className = "ml-20" size = {30} style = {{color: "#1DA1F2"}}></FaTwitter>
      <div className="text-left my-10">
      <SidebarOption Icon = {RiHome7Fill} size = {30} text = "Home"/>
      <SidebarOption Icon = {FaHashtag} size = {30} text = "Explore"/>
      <SidebarOption Icon = {BiBell} size = {30} text = "Notifications"/>
      <SidebarOption Icon = {BsEnvelope} size = {30} text = "Message"/>
      <SidebarOption Icon = {BsBookmark} size = {30} text = "Bookmark"/>
      <SidebarOption Icon = {MdOutlinePerson} size = {30} text = "Profile"/>
      <SidebarOption Icon = {FiMoreHorizontal} size = {30} text = "More"/>
      </div>
      <button className="bg-blue-500 text-white font-bold rounded-full w-20 px-20 py-3 w-auto">
        Tweet
      </button>
    </div>
  );
}

export default Sidebar;
