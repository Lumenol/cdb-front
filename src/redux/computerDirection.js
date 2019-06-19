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
    if (action.type === SET_DIRECTION_COMPUTER) {
        return action.direction;
    } else {
        return state;
    }
};

export default reducer;