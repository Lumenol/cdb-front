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

const selectDecodedToken = createSelector([selectToken], function (token) {
    const decoded = decode(token);
    if (decoded) {
        return decoded;
    } else {
        return {};
    }
});

function selectUserRoles(state) {
    const authorization = selectDecodedToken(state).Authorization;
    if (authorization) {
        return authorization;
    } else {
        return [];
    }
}

const selectUserHasRole = role => state => selectUserRoles(state).includes(role);


export const selectUserIsAdmin = selectUserHasRole("ROLE_ADMIN");

export const getPageSelectorState = state => ({
    step: state.pageSelector.step,
    minStep: state.pageSelector.minStep,
    midStep: state.pageSelector.midStep,
    maxStep: state.pageSelector.maxStep,
    page: state.pageSelector.page,
    minPage: state.pageSelector.minPage,
    maxPage: state.pageSelector.maxPage,
});
