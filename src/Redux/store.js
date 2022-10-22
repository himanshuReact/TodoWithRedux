import { createStore } from "redux";
import { reducer, initState } from "./reducer";

export const store = createStore(reducer, initState);
