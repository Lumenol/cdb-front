import {selectCurrentPage, selectMaxPage, selectMinPage, selectPageSize} from "./selectors";
import {getComputers, getCountComputers} from "./computers";

export const ORDER_BY = {
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
    return function (dispatch, getState) {
        const pageSize = selectPageSize(getState());
        if (pageSize !== size) {
            dispatch({type: SET_PAGE_SIZE, size: size});
            const state = getState();
            const maxPage = selectMaxPage(state);
            const currentPage = selectCurrentPage(state);
            if (currentPage > maxPage) {
                dispatch(setCurrentPage(maxPage));
            } else {
                dispatch(getComputers());
            }
        }
    }
}

function setCurrentPage(page) {
    return function (dispatch) {
        dispatch({type: SET_CURRENT_PAGE, page: page});
        dispatch(getComputers());
    };
}

export function previousPage() {
    return function (dispatch, getState) {
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
        const state = getState();
        const maxPage = selectMaxPage(state);
        const newCurrentPage = selectCurrentPage(state) + 1;
        if (newCurrentPage <= maxPage) {
            return dispatch(setCurrentPage(newCurrentPage));
        }
    }
}

export function setOrderByComputer(orderBy) {
    return function (dispatch) {
        dispatch({
            type: SET_ORDERBY_COMPUTER,
            orderBy: orderBy
        });
        dispatch(getComputers());
    };
}


export function setDirectionComputer(direction) {
    return function (dispatch) {
        dispatch({
            type: SET_DIRECTION_COMPUTER,
            direction: direction
        });
        dispatch(getComputers());
    };
}

let searchTimer;
const TIMEOUT = 300;

export function setSearchComputer(search) {
    return function (dispatch) {
        dispatch({
            type: SET_SEARCH_COMPUTER,
            search: search
        });
        if (searchTimer) {
            clearTimeout(searchTimer);
        }
        const handler = () => {
            dispatch(getComputers());
            dispatch(getCountComputers());
        };
        searchTimer = setTimeout(handler, TIMEOUT);
    };
}

export default function reducer(state = {
    page: 1,
    orderBy: ORDER_BY.NAME,
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
