const ADD_BUTTON = 'ADD_BUTTON';

export function addButton(boolean) {
    return {
        type: ADD_BUTTON,
        addButton: boolean
    }
}

const reducer = (state = false, action) => {
    switch (action.type) {
        case ADD_BUTTON:
            return action.addButton;
        default :
            return state;
    }
};

export default reducer;