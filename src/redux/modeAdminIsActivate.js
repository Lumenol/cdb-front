const MODE_ADMIN_IS_ACTIVATE = 'MODE_ADMIN_IS_ACTIVATE';
const MODE_ADMIN_IS_DEACTIVATE = 'MODE_ADMIN_IS_DEACTIVATE';

export function switchModeAdmin() {
    return {
        type: MODE_ADMIN_IS_ACTIVATE,
        adminMode: true
    }
}

export function switchModeUser() {
    return {
        type: MODE_ADMIN_IS_DEACTIVATE,
        adminMode: false
    }
}

const reducer = (state = false, action) => {
    switch (action.type) {
        case MODE_ADMIN_IS_ACTIVATE:
            return action.adminMode;
        case MODE_ADMIN_IS_DEACTIVATE:
            return action.adminMode;
        default :
            return state;
    }
};

export default reducer;
