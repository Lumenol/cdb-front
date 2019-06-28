import {getToken} from "../api/connection";
import {notificationError} from "./notification";
import i18n from "../configuration/i18n";
import {showComputers} from "./router";

const LOGOUT = "LOGOUT";
export const SET_TOKEN = "SET_TOKEN";

export function login(username, password) {
    return async function (dispatch) {
        try {
            const token = await getToken(username, password);
            dispatch(setToken(token));
            dispatch(showComputers());
        } catch (e) {
            dispatch(notificationError(i18n.t("connection.error")));
        }
    }
}

export function refreshToken() {
    return async function (dispatch) {
        try {
            const token = await refreshToken();
            dispatch(setToken(token));
        } catch (e) {
        }
    }
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
        default:
            return state;
    }
}
