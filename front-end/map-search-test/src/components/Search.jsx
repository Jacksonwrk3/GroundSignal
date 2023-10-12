import React from "react";

const Search = (props) => {
  return (
    <div className={`${props.className}`}>
      <div className=" h-12 flex items-center border border-gray-400">
        <img
          src="icon-search.svg"
          alt="Search Icon"
          className="h-6 ml-4 mr-4"
        />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 focus:outline-none"
          onChange={(e) => {
            props.searchHandler(e);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
