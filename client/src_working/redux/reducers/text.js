import { fromJS } from "immutable";
import { NEW_TEXT } from "../constants";

const newText = (state, action) => {
  return state.mergeDeep(fromJS(action.text));
};

const textReducer = (state, action) => {
  switch (action.type) {
    case NEW_TEXT:
      console.log('new text')
      return newText(state, action);
    default:
      return state;
  }
};

export default textReducer;
