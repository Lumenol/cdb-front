const SET_DIRECTION_COMPUTER = 'SET_DIRECTION_COMPUTER';
export const DIRECTION = {
    ASC: "asc",
    DESC: "desc"
};

export function setDirectionComputer(direction) {
    return {
        type: SET_DIRECTION_COMPUTER,
        direction: direction
    }
}

const reducer = (state = "asc", action) => {

    switch (action.type) {
        case SET_DIRECTION_COMPUTER:
            return action.direction;
        default :
            return state;
    }
};

export default reducer;