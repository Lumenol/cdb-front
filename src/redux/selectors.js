import {decode} from "jsonwebtoken";
import {createSelector} from "reselect";

export const selectComputers = state => state.computers.computers;

export function selectComputerCount(state) {
    return state.computers.count;
}

export function selectSelectedComputers(state) {
    return state.computers.selected;
}

export function selectComputersError(state) {
    return state.computers.error;
}

export const selectCompanies = state => state.companies.companies;

export const selectAddButton = state => state.addButton;

export function selectMinPage() {
    return 1;
}

export function selectCurrentPage(state) {
    return selectSearchParameters(state).page;
}

export const selectPageSize = state => selectSearchParameters(state).size;

export function selectSearchParameters(state) {
    return state.searchParameters;
}

export function selectComputerSearch(state) {
    return selectSearchParameters(state).search;
}

export function selectComputerOrderBy(state) {
    return selectSearchParameters(state).orderBy;
}

export function selectLanguage(state) {
    return state.language;
}

export function selectComputerDirection(state) {
    return selectSearchParameters(state).direction;
}

export function selectMenuIsOpen(state) {
    return state.isOpen;
}

export function selectShow(state) {
    return state.router;

}

export function selectUserBecomeAnAdmin(state) {
    return state.isAdmin;
}

export const selectIsConnected = state => selectTokenIsNotExpired(state);

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

export function selectUsername(state) {
    return selectDecodedToken(state).sub;
}

function selectTokenEndOfLife(state) {
    return selectDecodedToken(state).exp * 1000;
}

function selectTokenIsNotExpired(state) {
    const now = new Date();
    const selectTokenEndOfLife1 = selectTokenEndOfLife(state);
    const utcMilliseconds = now.getTime();
    return selectTokenEndOfLife1 > utcMilliseconds;
}

export const selectMaxPage = createSelector([selectComputerCount, selectPageSize], (count, size) => Math.floor(count / size) + (count % size > 0 ? 1 : 0));
