import React from "react";
import { useSelector } from "react-redux";
import WebsiteLink from "./WebsiteLink.jsx";
import Gallery from "./Gallery.jsx";
const LocationDetails = () => {
  const locationInfo = useSelector((state) => state.currentLocation);
  console.log(locationInfo);
  if (locationInfo) {
    return (
      <div className="bg-white z-11 rounded-md opacity-100 w-1/3 ">
        <div className="w-full flex flex-row items-center justify-between border-b border-gray-300 py-2">
          <div className="w-1/2  flex flex-row items-center ">
            <img src="icon-pin.svg" alt="Pin Icon" className="h-6 ml-4 mr-4" />
            <div className="flex flex-col">
              <span className="font-bold">{locationInfo.name}</span>
              <div>
                <span>
                  {locationInfo.location.lat}, {locationInfo.location.lon}
                </span>
              </div>
            </div>
          </div>
          {/* checks if details is in locatinInfo before checking if website is in locationInfo. If no website then no render */}
          {locationInfo.details?.website ? (
            <WebsiteLink className="mr-4" href={locationInfo.details.website}>
              Visit Website
            </WebsiteLink>
          ) : null}
        </div>
        {/* If we have information on description or we have information on images we'll load the bottom portion with the description we are provided, otherwise we will render a div that tells users there's no more information */}
        {locationInfo.details?.description || locationInfo.images ? (
          <>
            <span className="w-11/12 mb-12 mx-auto mt-2 flex just-center ">
              {locationInfo.details?.description}
            </span>
            <div className="w-11/12 mx-auto">
              {locationInfo.images ? (
                <Gallery
                  className="mb-4"
                  colNum={3}
                  gapNum={2}
                  images={locationInfo.images}
                />
              ) : null}
            </div>{" "}
          </>
        ) : (
          <div className="w-full flex justify-center my-4 text-red-400">
            No additional Information Provided
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default LocationDetails;
