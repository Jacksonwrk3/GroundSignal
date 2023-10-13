import Map from "./Map.jsx";
import { typing } from "../actions/index.js";
import Search from "./Search.jsx";
import MatchedList from "./MatchedList.jsx";
import LocationDetails from "./LocationDetails.jsx";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./Modal.jsx";
const CompleteMap = () => {
  const dispatch = useDispatch();
  let currentLocation = useSelector((state) => {
    state.currentLocation;
  });
  const searchHandler = (e) => {
    dispatch(typing(e.target.value));
  };

  return (
    <div className="w-screen h-screen relative ">
      <div className="w-1/4 absolute top-4 left-16 z-10">
        <Search searchHandler={searchHandler} className="bg-white" />
        <MatchedList />
      </div>
      <Map />
      <Modal>
        <LocationDetails />
      </Modal>
    </div>
  );
};

export default CompleteMap;
