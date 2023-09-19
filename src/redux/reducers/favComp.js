import { ADD_TO_FAV_COMP, REMOVE_FROM_FAV_COMP } from "../actions";

const initialState = {
  content: [],
};

const favCompReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV_COMP:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case REMOVE_FROM_FAV_COMP:
      return {
        ...state,
        content: state.content.filter(elm => elm._id !== action.payload._id),
      };

    default:
      return state;
  }
};

export default favCompReducer;
