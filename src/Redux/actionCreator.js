// import * as actions from "./actionType";

import { ADD_TASK } from "./actionType";
import { v4 as uuidv4 } from "uuid";

export const addTask = (payload) => ({
  type: ADD_TASK,
  payload: {
    id: uuidv4(),
    title: payload,
    status: false
  }
});
