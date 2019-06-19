const CONST_PRESS_CONNECT_BUTTON = "TOGGLE_CONNECT_BUTTON";


export function toggleConnect(isConnected) {
    return {type: CONST_PRESS_CONNECT_BUTTON, isConnected}
}

/**
 * @return {boolean}
 */
export function ConnectReducer(state = '', action) {
    switch (action.type) {
        case CONST_PRESS_CONNECT_BUTTON:
            return !state;
        default:
            return state;
    }
}
