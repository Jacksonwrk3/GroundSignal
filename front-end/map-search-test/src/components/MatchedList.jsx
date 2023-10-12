import React from "react";
import sampleData from "../../data/sample-data.js";
import LocationCard from "../UI/LocationCard.jsx";
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
        locationInfo={location}
      >
        <div className="h-full w-full flex flex-row items-center ">
          <img src="icon-pin.svg" alt="Pin Icon" className="h-6 ml-4 mr-4" />
          <div className="flex flex-col">
            <span className="font-bold">{location.name}</span>
            <div>
              <span>
                {location.location.lat}, {location.location.lon}
              </span>
            </div>
          </div>
        </div>
      </LocationCard>
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
