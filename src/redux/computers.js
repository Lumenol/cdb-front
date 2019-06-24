import {getAll} from "../api/computer";
import {
    selectComputerDirection,
    selectComputerOrderBy,
    selectComputerSearch,
    selectPage,
    selectPageSize
} from "./selectors";

const SELECT_COMPUTER = "SELECT_COMPUTER";
const UNSELECT_COMPUTER = "UNSELECT_COMPUTER";
const SET_COMPUTERS = "SET_COMPUTERS";
const SET_ERROR = "SET_ERROR";

export function getComputers() {
    return async function (dispatch, getState) {
        try {
            const state = getState();
            const result = await getAll(selectComputerDirection(state), selectComputerOrderBy(state), selectPage(state),
                selectComputerSearch(state), selectPageSize(state));
            dispatch(setComputers(result));
        } catch (e) {
            dispatch(setError(e));
        }
    }
}

export function selectComputer(id) {
    return {
        type: SELECT_COMPUTER,
        id: id
    }
}

function setComputers(computers) {
    return {
        type: SET_COMPUTERS,
        computers: computers
    }
}

function setError(error) {
    return {
        type: SET_ERROR,
        error: error
    }
}

export function unselectComputer(id) {
    return {
        type: UNSELECT_COMPUTER,
        id: id
    }
}

export default function reducer(state = {computers: [], selected: []}, action) {
    switch (action.type) {
        case SELECT_COMPUTER:
            return {...state, selected: [action.id]};
        case UNSELECT_COMPUTER:
            return {...state, selected: state.selected.filter((id) => action.id !== id)};
        case SET_COMPUTERS:
            return {computers: action.computers, selected: []};
        case SET_ERROR:
            return {...state, error: action.error};
        default:
            return state;
    }
}