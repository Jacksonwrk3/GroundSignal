const getSearchValueReducer = (state = "", action) => {
  switch (action.type) {
    case "TYPING":
      return action.payload;

    default: // Add a default case to handle other action types
      return state;
  }
};

export default getSearchValueReducer;
