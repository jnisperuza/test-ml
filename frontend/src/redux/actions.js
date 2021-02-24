import {
  LOOK_FOR,
  SET_RESULTS,
  SELECTED_ITEM,
  SHOW_PRELOADER,
  ADD_BREADCRUMB,
  EMPTY_BREADCRUMBS,
} from "./actionTypes";

export const lookFor = (lookFor) => ({
  type: LOOK_FOR,
  payload: { lookFor },
});

export const setResults = (allItems) => ({
  type: SET_RESULTS,
  payload: { allItems },
});

export const selectedItem = (selectedItem) => ({
  type: SELECTED_ITEM,
  payload: { selectedItem },
});

export const showPreloader = (showPreloader) => ({
  type: SHOW_PRELOADER,
  payload: { showPreloader },
});

export const addBreadcrumb = (breadcrumb) => ({
  type: ADD_BREADCRUMB,
  payload: { breadcrumb },
});

export const emptyBreadcrumbs = () => ({
  type: EMPTY_BREADCRUMBS,
});
