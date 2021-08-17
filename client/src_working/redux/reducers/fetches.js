import { fromJS } from "immutable";
import { UPDATE_CONCORDANCE_DATA } from "../constants";

const newFetch = (state, action) => {
    return state.mergeDeep(fromJS(action.data));
};

const fetchReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_CONCORDANCE_DATA:
            return newFetch(state, action);
        default:
            return state;
    }
};

export default fetchReducer;