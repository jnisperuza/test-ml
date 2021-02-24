import { combineReducers } from "redux";

import items from "./items";
import search from "./search";
import preloader from "./preloader";

export default combineReducers({ items, search, preloader });
