const LOGOUT = "LOGOUT";


export function logout() {
    return {type: LOGOUT};
}

export default function connectionReducer(state = '', action) {
    switch (action.type) {
        case LOGOUT:
            return '';
        default:
            return state;
    }
}
