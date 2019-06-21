import {selectCurrentPage, selectMaxPage, selectMinPage} from "./selectors";

export const ORDER_BY = {
    ID: "id",
    NAME: "name",
    INTRODUCED: "introduced",
    DISCONTINUED: "discontinued",
    COMPANY: "company"
};

export const DIRECTION = {
    ASC: "asc",
    DESC: "desc"
};


const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_PAGE_SIZE = "SET_PAGE_SIZE";
const SET_ORDERBY_COMPUTER = 'SET_ORDERBY_COMPUTER';
const SET_DIRECTION_COMPUTER = 'SET_DIRECTION_COMPUTER';
const SET_SEARCH_COMPUTER = 'SET_SEARCH_COMPUTER';


export function setPageSize(size) {
    return {
        type: SET_PAGE_SIZE,
        size: size
    }
}

function setCurrentPage(page) {
    return {type: SET_CURRENT_PAGE, page: page};
}

export function previousPage() {
    return function (dispatch, getState) {
        debugger;
        const state = getState();
        const minPage = selectMinPage(state);
        const newCurrentPage = selectCurrentPage(state) - 1;
        if (newCurrentPage >= minPage) {
            return dispatch(setCurrentPage(newCurrentPage));
        }
    }
}

export function nextPage() {
    return function (dispatch, getState) {
        debugger;
        const state = getState();
        const maxPage = selectMaxPage(state);
        const newCurrentPage = selectCurrentPage(state) + 1;
        if (newCurrentPage <= maxPage) {
            return dispatch(setCurrentPage(newCurrentPage));
        }
    }
}

export function setOrderByComputer(orderBy) {
    return {
        type: SET_ORDERBY_COMPUTER,
        orderBy: orderBy
    }
}


export function setDirectionComputer(direction) {
    return {
        type: SET_DIRECTION_COMPUTER,
        direction: direction
    }
}

export function setSearchComputer(search) {
    return {
        type: SET_SEARCH_COMPUTER,
        search: search
    }
}

export default function reducer(state = {
    page: 1,
    orderBy: ORDER_BY.ID,
    size: 10,
    direction: DIRECTION.ASC,
    search: ""
}, action) {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {...state, page: action.page};
        case SET_PAGE_SIZE:
            return {...state, size: action.size};
        case SET_ORDERBY_COMPUTER:
            return {...state, orderBy: action.orderBy, page: 1};
        case SET_DIRECTION_COMPUTER:
            return {...state, direction: action.direction, page: 1};
        case  SET_SEARCH_COMPUTER:
            return {...state, search: action.search, page: 1};
        default:
            return state;
    }
}
