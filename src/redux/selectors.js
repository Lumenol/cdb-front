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

export const getConnectState = state => state.isConnected;

export const getPageSelectorState = state => ({
    step: state.pageSelector.step,
    minStep: state.pageSelector.minStep,
    midStep: state.pageSelector.midStep,
    maxStep: state.pageSelector.maxStep,
    page: state.pageSelector.page,
    minPage: state.pageSelector.minPage,
    maxPage: state.pageSelector.maxPage,
});
