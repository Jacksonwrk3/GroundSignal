export const typing = (searchValue) => {
  return {
    type: "TYPING",
    payload: searchValue,
  };
};

export const displayModal = (modalState) => {
  return {
    type: "TOGGLE",
    payload: modalState,
  };
};

export const relocate = (locationInfo) => {
  return {
    type: "RELOCATE",
    payload: locationInfo,
  };
};
