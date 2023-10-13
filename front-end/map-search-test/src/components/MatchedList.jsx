import React from "react";
import sampleData from "../../data/sample-data.js";
import LocationCard from "./LocationCard.jsx";
import { relocate } from "../actions/index.js";

import { useSelector, useDispatch } from "react-redux";

const MatchedList = () => {
  const searchValue = useSelector((state) => state.searchValue);

  const dispatch = useDispatch();

  const listItemHandler = (locationInfo) => {
    dispatch(relocate(locationInfo));
  };
  if (!searchValue) {
    return <></>;
  } else {
    const filteredLocations = sampleData.filter((location) =>
      location.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    const matchedLocations = filteredLocations.map((location) => (
      // Location Card will always have location info, but will have a handler that does different things. Reason why content isn't inside location card is so if we want to style it differently.
      <LocationCard
        key={location.id}
        clickHandler={listItemHandler}
        location={location}
      />
    ));
    return (
      <div>
        <div className="bg-blue-500 h-8 text-white flex items-center mt-4">
          <span className="ml-4">
            Found {matchedLocations.length} result(s):
          </span>
        </div>
        <ul className="w-full">{matchedLocations}</ul>
      </div>
    );
  }
};

export default MatchedList;
