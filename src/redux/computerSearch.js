const SET_SEARCH_COMPUTER = 'SET_SEARCH_COMPUTER';

export function setSearchComputer(search) {
    return {
        type: SET_SEARCH_COMPUTER,
        search: search
    }
}

const reducer = (state = "", action) => {
    switch (action.type) {
        case  SET_SEARCH_COMPUTER:
            return action.search;
        default :
            return state;
    }
};

export default reducer;