const CONST_PRESS_NEXT_PAGE_BUTTON = "next_page";
const CONST_PRESS_PREVIOUS_PAGE_BUTTON = "previous_page";

export function previousPage() {
    return {type: CONST_PRESS_PREVIOUS_PAGE_BUTTON}
}

export function nextPage() {
    return {type: CONST_PRESS_NEXT_PAGE_BUTTON}
}

const initialState = {
    minStep:0,
    midStep:3,
    maxStep:6,
    minPage:0,
    maxPage:20,
    page:1,
};

export function PageReducer(state = initialState, action) {
    switch (action.type) {
        case CONST_PRESS_PREVIOUS_PAGE_BUTTON:
            return Object.assign({}, state, {
                page: state.page > state.minPage ? state.page - 1 : state.page
            });
        case CONST_PRESS_NEXT_PAGE_BUTTON:
            return Object.assign({}, state, {
                page: state.page < state.maxPage ? state.page + 1 : state.page
            });
        default:
            return state;
    }
}
