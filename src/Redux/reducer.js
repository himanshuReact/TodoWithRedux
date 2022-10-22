// import AddTask from "../components/AddTask";
import { ADD_TASK } from "./actionType";
export const initState = {
  todo: []
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    // case ADD_TASK:
    //   return {
    //     ...state,
    //     todo: [...state.todo, payload]
    //   };

    case ADD_TASK:
      return {
        ...state,
        todo: [...state.todo, payload]
      };
    default:
      return state;
  }
};
