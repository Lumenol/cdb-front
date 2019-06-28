import {getUsers} from "./users";
import {getCompanies} from "./companies";
import {getComputers, getCountComputers} from "./computers";

const SET_SHOW = "SET_SHOW";
export const SHOW = {
    COMPANIES: "COMPANIES",
    COMPUTERS: "COMPUTERS",
    USERS: "USERS"
};

export function showUsers() {
    return function (dispatch) {
        dispatch(getUsers());
        dispatch(setShow(SHOW.USERS));
    }
}

export function showCompanies() {
    return function (dispatch) {
        dispatch(getCompanies());
        dispatch(setShow(SHOW.COMPANIES));
    }
}

export function showComputers() {
    return function (dispatch) {
        dispatch(getComputers());
        dispatch(getCountComputers());
        dispatch(setShow(SHOW.COMPUTERS));
    }
}

function setShow(show) {
    return {
        type: SET_SHOW,
        show: show
    }
}

const reducer = (state = SHOW.COMPUTERS, action) => {
    switch (action.type) {
        case SET_SHOW:
            return action.show;
        default :
            return state;
    }
};

export default reducer;