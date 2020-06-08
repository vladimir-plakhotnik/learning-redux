import { SAVE, CLEAR } from "./types";

const initialState = {
    saved: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE:
            return { 
                ...state, 
                saved: [
                    ...state.saved || [], action.payload
                ],
            }
        case CLEAR:
            return {
                ...state,
                saved: [],
            }
        default:
            return state;
    }
}

export default reducer;