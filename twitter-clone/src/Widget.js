import React from "react";
import { ImSearch} from "react-icons/im";

function Widget() {
  return (
    <div className="h-screen widgets">
      <div id="search" className="h-12 items-center justify-center flex">
        <div className="w-80 py-2 flex items-center justify-center rounded-3xl bg-gray-200 ">
          <span className="search-icon">
            <ImSearch />
          </span>
          <input
            className="w-64 bg-transparent px-2 text-base border focus: outline-none"
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>
      <div id="youmightlike" className="h-auto bg-blue-300">
        <h1>Show you might like here</h1>
      </div>
      <div id="what'shappening" className="h-auto bg-blue-400">
        <h1>Show what is happening here.</h1>
        </div>
      <div id="termsofservice" className="h-auto bg-blue-500">
        <h1>Show terms of service here.</h1>
      </div>
    </div>
  );
}

export default Widget;
