const SET_ORDERBY_COMPUTER = 'SET_ORDERBY_COMPUTER';
export const ORDER_BY = {
    ID: "id",
    NAME: "name",
    INTRODUCED: "introduced",
    DISCONTINUED: "discontinued",
    COMPANY: "company"
};

export function setOrderByComputer(orderBy) {
    return {
        type: SET_ORDERBY_COMPUTER,
        orderBy: orderBy
    }

}

const reducer = (state = ORDER_BY.ID, action) => {

    switch (action.type) {
        case SET_ORDERBY_COMPUTER:
            return action.orderBy;
        default :
            return state;
    }
};

export default reducer;