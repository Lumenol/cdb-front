import {getToken} from "../api/connection";

const LOGOUT = "LOGOUT";
const SET_TOKEN = "SET_TOKEN";

export function login(username, password) {
    return async function (dispatch) {
        const token = await getToken(username, password);
        dispatch(setToken(token));
    }
}

function setToken(token) {
    return {type: SET_TOKEN, token: token};
}


export function logout() {
    return {type: LOGOUT};
}

export default function connectionReducer(state = '', action) {
    switch (action.type) {
        case LOGOUT:
            return '';
        case SET_TOKEN:
            return action.token;
        default:
            return state;
    }
}
