import React from "react";

const LocationCard = (props) => {
  return (
    <li
      className={`w-full flex items-center border hover:cursor-pointer border-gray-300 py-2 bg-white ${props.className}`}
      onClick={
        props.clickHandler ? () => props.clickHandler(props.locationInfo) : null
      }
    >
      {props.children}
    </li>
  );
};

export default LocationCard;
