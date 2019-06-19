export function selectComputerSearch(state) {
    return state.search;
}

export function selectComputerOrderBy(state) {
    return state.orderBy;
}

export function selectComputerDirection(state) {
    return state.direction;
}

export function selectMenuIsOpen(state) {
    return state.isOpen;
}

export function selectLanguage(state) {
    return state.language;
}
export const getConnectState = state => state.isConnected;
