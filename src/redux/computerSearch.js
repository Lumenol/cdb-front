const SET_SEARCH_COMPUTER = 'SET_SEARCH_COMPUTER';

export function setSearchComputer(search) {
    return {
        type: SET_SEARCH_COMPUTER,
        search: search
    }
}

const reducer = (state = "", action) => {
    if (action.type === SET_SEARCH_COMPUTER) {
        return action.search;
    } else {
        return state;
    }
};

export default reducer;