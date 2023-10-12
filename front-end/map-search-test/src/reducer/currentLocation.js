const currentLocation = (state = false, action) => {
  switch (action.type) {
    case "RELOCATE":
      return action.payload;
    default:
      return state;
  }
};

export default currentLocation;
