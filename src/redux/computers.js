import {countComputers, createComputer, deleteComputer, getAll, updateComputer as upComputer} from "../api/computers";
import {
    selectComputerDirection,
    selectComputerOrderBy,
    selectComputerSearch,
    selectCurrentPage,
    selectPageSize
} from "./selectors";
import {notificationError, notificationSuccess} from "./notification";
import i18n from "../configuration/i18n";

const SELECT_COMPUTER = "SELECT_COMPUTER";
const UNSELECT_COMPUTER = "UNSELECT_COMPUTER";
const SET_COMPUTERS = "SET_COMPUTERS";
const SET_COUNT_COMPUTERS = "SELECT_COUNT_COMPUTERS";


export function getComputers() {
    return async function (dispatch, getState) {
        try {
            const state = getState();
            const result = await getAll(selectCurrentPage(state), selectPageSize(state), selectComputerOrderBy(state), selectComputerDirection(state), selectComputerSearch(state));
            dispatch(setComputers(result));

        } catch (e) {
            dispatch(notificationError(i18n.t("computer.load")));
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
            dispatch(notificationError(i18n.t("computer.load")));
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
            dispatch(notificationSuccess(i18n.t("computer.creation.success")));
        } catch (e) {
            dispatch(notificationError(i18n.t("computer.creation.error")));
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
            dispatch(notificationSuccess(i18n.t("computer.update.success")));
        } catch (e) {
            dispatch(notificationError(i18n.t("computer.update.error")));
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
            dispatch(notificationSuccess(i18n.t("computer.delete.success")));
        } catch (e) {
            dispatch(notificationError(i18n.t("computer.delete.error")));
        }
    }
}

function setComputers(computers) {
    return {
        type: SET_COMPUTERS,
        computers: computers
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
        case SET_COUNT_COMPUTERS:
            return {...state, count: action.count};
        default:
            return state;
    }
}