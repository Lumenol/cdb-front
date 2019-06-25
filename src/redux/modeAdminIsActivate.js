const MODE_ADMIN_IS_ACTIVATE = 'MODE_ADMIN_IS_ACTIVATE';

export function switchModeAdmin() {
    return {
        type: MODE_ADMIN_IS_ACTIVATE,
        isAdmin: true
    }
}

export function switchModeUser() {
    return {
        type: MODE_ADMIN_IS_ACTIVATE,
        isAdmin: false
    }
}

const reducer = (state = true, action) => {
    switch (action.type) {
        case MODE_ADMIN_IS_ACTIVATE:
            return action.isAdmin;
        default :
            return state;
    }
};

export default reducer;