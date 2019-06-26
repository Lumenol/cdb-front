const USER_IS_ADMIN = 'USER_IS_ADMIN';

export function AdminMode() {
    return {
        type: USER_IS_ADMIN,
        isAdmin: true
    }
}

const reducer = (state = true, action) => {
    switch (action.type) {
        case USER_IS_ADMIN:
            return action.isAdmin;
        default:
            return state;
    }
};

export default reducer;
