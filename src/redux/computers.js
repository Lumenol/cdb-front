const SELECT_COMPUTER = "SELECT_COMPUTER";
const UNSELECT_COMPUTER = "UNSELECT_COMPUTER";

export function selectComputer(id) {
    return {
        type: SELECT_COMPUTER,
        id: id
    }
}

export function unselectComputer(id) {
    return {
        type: UNSELECT_COMPUTER,
        id: id
    }
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case SELECT_COMPUTER:
            return [action.id];
        case UNSELECT_COMPUTER:
            return state.filter((id) => action.id !== id);
    }
    return state;
}