const displayModal = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE":
      return action.payload;
    default:
      return state;
  }
};

export default displayModal;
