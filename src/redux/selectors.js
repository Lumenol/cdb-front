import {createSelector} from "reselect";
import {decode} from "jsonwebtoken";

export function selectSelectedComputers(state) {
    return state.selectedComputers;
}

export function selectComputerSearch(state) {
    return state.search;
}

export function selectComputerOrderBy(state) {
    return state.orderBy;
}

export function selectLanguage(state) {
    return state.language;
}

export function selectComputerDirection(state) {
    return state.direction;
}

export function selectMenuIsOpen(state) {
    return state.isOpen;
}

export const selectIsConnected = state => !!selectToken(state);

export function selectToken(state) {
    return selectConnectionInfos(state).token;
}

export function selectLoginError(state) {
    return selectConnectionInfos(state).error;
}

function selectConnectionInfos(state) {
    return state.connectionInfos;
}

export const selectDecodedToken = createSelector([selectToken], decode);