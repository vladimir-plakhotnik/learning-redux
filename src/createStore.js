const createStore = reducer => {

    let state = {};
    const subscribers = [];

    return {

        dispatch: action => {
            state = reducer(state, action);
            subscribers.forEach(subscriber => subscriber());
        },

        subscribe: callback => {
            subscribers.push(callback);
        },

        getState: () => state,
    }

}

export default createStore;