import { SAVE, CLEAR } from "./types"

const saveAction = value => {
    return {
        type: SAVE,
        payload: value,
    }
}

const clearAction = () => {
    return {
        type: CLEAR
    }
}

export {saveAction, clearAction};