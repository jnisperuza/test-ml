import { SHOW_PRELOADER } from "../actionTypes";

const initialState = {
  showPreloader: false,
};

export default function preloader(state = initialState, action) {
  switch (action.type) {
    case SHOW_PRELOADER: {
      const { showPreloader } = action.payload;
      return {
        ...state,
        showPreloader,
      };
    }
    default:
      return state;
  }
}
