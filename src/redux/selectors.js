import {decode} from "jsonwebtoken";
import {createSelector} from "reselect";

export const selectPageSize = state => state.pageSize;

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

export const getPageSelectorState = state => ({
    step: state.pageSelector.step,
    minStep: state.pageSelector.minStep,
    midStep: state.pageSelector.midStep,
    maxStep: state.pageSelector.maxStep,
    page: state.pageSelector.page,
    minPage: state.pageSelector.minPage,
    maxPage: state.pageSelector.maxPage,
});
