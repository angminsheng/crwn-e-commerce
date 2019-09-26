import shop from "../../data/shops";

const INITIAL_STATE = {
  collections: shop
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};

export default shopReducer;
