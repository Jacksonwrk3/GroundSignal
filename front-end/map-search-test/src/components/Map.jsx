import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  MapConsumer,
} from "react-leaflet";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import "./Map.css";
import { useMap } from "react-leaflet/hooks";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector, useDispatch } from "react-redux";
import { displayModal } from "../actions/index.js";
const Map = () => {
  const currentLocation = useSelector((state) => state.currentLocation);
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(displayModal(true));
  };
  let latitude;
  let longitude;
  let locationName;
  const icon = new Icon({
    iconUrl: iconMarker,
  });
  if (!currentLocation) {
    latitude = 40.6527;
    longitude = -74.0093;
  } else {
    latitude = currentLocation.location.lat;
    longitude = currentLocation.location.lon;
    locationName = currentLocation.name;
  }
  // I could not change the MapContainer prop after it was initially set, so i had to create a component and implement the useMap hook which would provide me the instance of the Map if i put it as a child of the MapContainer. I then targeted the map and used map.setView to dynamically relocate the map when I clicked on it
  const RecenterMap = () => {
    const map = useMap();
    map.setView([latitude, longitude]);
    return null;
  };

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      className="h-full w-full"
    >
      <RecenterMap />
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {currentLocation ? (
        <Marker
          position={[latitude, longitude]}
          icon={icon}
          eventHandlers={{
            click: () => {
              openModal();
            },
          }}
        >
          <Popup>{locationName}</Popup>
        </Marker>
      ) : null}
    </MapContainer>
  );
};

export default Map;
