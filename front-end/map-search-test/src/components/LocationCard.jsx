import React from "react";

const LocationCard = (props) => {
  return (
    <li
      className={`w-full flex items-center border hover:cursor-pointer border-gray-300 py-2 bg-white ${props.className}`}
      onClick={
        props.clickHandler ? () => props.clickHandler(props.location) : null
      }
    >
      <div className="h-full w-full flex flex-row items-center ">
        <img src="icon-pin.svg" alt="Pin Icon" className="h-6 ml-4 mr-4" />
        <div className="flex flex-col">
          <span className="font-bold">{props.location.name}</span>
          <div>
            <span>
              {props.location.location.lat}, {props.location.location.lon}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default LocationCard;
