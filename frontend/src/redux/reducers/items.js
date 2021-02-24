import {
  SET_RESULTS,
  SELECTED_ITEM,
  ADD_BREADCRUMB,
  EMPTY_BREADCRUMBS,
} from "../actionTypes";

const initialState = {
  allItems: [],
  selectedItem: null,
  breadcrumbs: [],
};

export default function items(state = initialState, action) {
  switch (action.type) {
    case SET_RESULTS: {
      const { allItems } = action.payload;
      return {
        ...state,
        allItems,
      };
    }
    case SELECTED_ITEM: {
      const { selectedItem } = action.payload;
      return {
        ...state,
        selectedItem,
      };
    }
    case ADD_BREADCRUMB: {
      const { breadcrumb } = action.payload;
      return {
        ...state,
        breadcrumbs: [...state.breadcrumbs, breadcrumb],
      };
    }
    case EMPTY_BREADCRUMBS: {
      return {
        ...state,
        breadcrumbs: [],
      };
    }
    default:
      return state;
  }
}
