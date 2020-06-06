import { SAVE, CLEAR } from "./types";

const reducer = (state = [], action) => {

    switch(action.type) {
        case SAVE:
            state.push(action.payload);
            return state;
        case CLEAR:
            state = [];
            return state;
        default:
            return state;
    }
}

export default reducer;