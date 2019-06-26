import {countComputers, createComputer, deleteComputer, getAll, updateComputer as upComputer} from "../api/computers";
import {
    selectComputerDirection,
    selectComputerOrderBy,
    selectComputerSearch,
    selectCurrentPage,
    selectPageSize
} from "./selectors";

const SELECT_COMPUTER = "SELECT_COMPUTER";
const UNSELECT_COMPUTER = "UNSELECT_COMPUTER";
const SET_COMPUTERS = "SET_COMPUTERS";
const SET_ERROR = "SET_ERROR";
const SET_COUNT_COMPUTERS = "SELECT_COUNT_COMPUTERS";

export function getComputers() {
    return async function (dispatch, getState) {
        try {
            const state = getState();
            const result = await getAll(selectCurrentPage(state), selectPageSize(state), selectComputerOrderBy(state), selectComputerDirection(state), selectComputerSearch(state));
            dispatch(setComputers(result));
        } catch (e) {
            dispatch(setError(e));
        }
    }
}

export function getCountComputers() {
    return async function (dispatch, getState) {
        try {
            const state = getState();
            const result = await countComputers(selectComputerSearch(state));
            dispatch(setCountComputers(result));
        } catch (e) {
            dispatch(setError(e));
        }
    }
}

export const addComputer = (name, introduced, discontinued, manufacturerId) => {
    return async function (dispatch) {
        try {
            await addComputer(createComputer({
                name,
                introduced,
                discontinued,
                manufacturerId
            }));
            dispatch(getComputers());
        } catch (e) {
            dispatch(setError(e));
        }
    }
};

export const updateComputer = (id, name, introduced, discontinued, manufacturerId) => {
    return async function (dispatch) {
        try {
            await upComputer({
                id,
                name,
                introduced,
                discontinued,
                manufacturerId
            });
            dispatch(getComputers());
        } catch (e) {
            dispatch(setError(e));
        }
    }
};

function setCountComputers(count) {
    return {
        type: SET_COUNT_COMPUTERS,
        count: count
    }
}

export function selectComputer(id) {
    return {
        type: SELECT_COMPUTER,
        id: id
    }
}

export function deleteAComputer(id) {
    return async function (dispatch) {
        try {
            await deleteComputer(id);
            dispatch(getComputers());
            dispatch(getCountComputers());
        } catch (e) {
            dispatch(setError(e));
        }
    }
}

function setComputers(computers) {
    return {
        type: SET_COMPUTERS,
        computers: computers
    }
}

export function setError(error) {
    return {
        type: SET_ERROR,
        error: error
    }
}

export function unselectComputer() {
    return {
        type: UNSELECT_COMPUTER
    }
}

export default function reducer(state = {computers: [], selected: null, count: 0}, action) {
    switch (action.type) {
        case SELECT_COMPUTER:
            return {...state, selected: action.id};
        case UNSELECT_COMPUTER:
            return {...state, selected: null};
        case SET_COMPUTERS:
            return {...state, computers: action.computers, selected: null};
        case SET_ERROR:
            return {...state, error: action.error.message};
        case SET_COUNT_COMPUTERS:
            return {...state, count: action.count};
        default:
            return state;
    }
}