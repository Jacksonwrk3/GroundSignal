import React from "react";
import { displayModal } from "../actions/index.js";
import { useSelector, useDispatch } from "react-redux";
const Modal = (props) => {
  const modalIsActive = useSelector((state) => state.displayModal);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(displayModal(false));
  };

  return (
    <div
      className={`w-full h-full bg-gray-500 bg-opacity-50 z-50 absolute top-0 left-0 ${
        modalIsActive ? "inline" : "hidden"
      }`}
      onClick={() => {
        closeModal();
      }}
    >
      <div className="w-full h-full relative flex items-center justify-center border border-blue-500">
        <img
          src="x-button.png"
          alt="Close Button"
          className="absolute top-7 right-7"
          onClick={(e) => {
            closeModal();
          }}
        />
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
