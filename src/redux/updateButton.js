const UPDATE_BUTTON = 'UPDATE_BUTTON';

export function updateButton(boolean, id) {
    return {
        type: UPDATE_BUTTON,
        updateButton: {
            id,
            boolean
        }
    }
}

const reducer = (state = {boolean: false, id: -1}, action) => {
    switch (action.type) {
        case UPDATE_BUTTON:
            return action.updateButton;
        default :
            return state;
    }
};

export default reducer;