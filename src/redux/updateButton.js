const UPDATE_BUTTON = 'UPDATE_BUTTON';

export function updateButton(boolean, computer) {
    return {
        type: UPDATE_BUTTON,
        updateButton: {
            computer,
            boolean
        }
    }
}

const reducer = (state = {boolean: false, computer: null}, action) => {
    switch (action.type) {
        case UPDATE_BUTTON:
            return action.updateButton;
        default :
            return state;
    }
};

export default reducer;