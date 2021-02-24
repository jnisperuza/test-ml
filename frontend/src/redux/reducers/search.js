import { LOOK_FOR } from "../actionTypes";

const initialState = {
  lookFor: "",
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case LOOK_FOR: {
      const { lookFor } = action.payload;
      return {
        ...state,
        lookFor,
      };
    }
    default:
      return state;
  }
}
