import {getToken} from "../api/connection";

const LOGOUT = "LOGOUT";
const SET_TOKEN = "SET_TOKEN";
const SET_ERROR_LOGIN = "SET_ERROR_LOGIN";

export function login(username, password) {
    return async function (dispatch) {
        try {
            const token = await getToken(username, password);
            dispatch(setToken(token));
        } catch (e) {
            dispatch(setError(e));
        }
    }
}

export function refreshToken() {
    return async function (dispatch) {
        try {
            const token = await refreshToken();
            dispatch(setToken(token));
        } catch (e) {
            dispatch(setError(e));
        }
    }
}

function setError(error) {
    return {type: SET_ERROR_LOGIN, error: error};
}

function setToken(token) {
    return {type: SET_TOKEN, token: token};
}


export function logout() {
    return {type: LOGOUT};
}

export default function connectionReducer(state = {token: ""}, action) {
    switch (action.type) {
        case LOGOUT:
            return {token: ''};
        case SET_TOKEN:
            return {token: action.token};
        case SET_ERROR_LOGIN:
            return {...state, error: action.error.message};
        default:
            return state;
    }
}
