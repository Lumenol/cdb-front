const CONST_PRESS_CONNECT_BUTTON = "toggle_connect_button";


export function toggleConnect(isConnected){
    return {type: CONST_PRESS_CONNECT_BUTTON, isConnected}
}

export function RootReducer(state = false, action) {
    if (action.type === CONST_PRESS_CONNECT_BUTTON) {
        return Object.assign({}, state, {
            isConnected: !state.isConnected
        });
    }
    return state;
}
