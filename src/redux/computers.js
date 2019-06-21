const SELECT_COMPUTER = "SELECT_COMPUTER";
const UNSELECT_COMPUTER = "UNSELECT_COMPUTER";
const SET_COMPUTERS = "SET_COMPUTERS";

export function selectComputer(id) {
    return {
        type: SELECT_COMPUTER,
        id: id
    }
}

export function setComputers(computers) {
    return {
        type: SET_COMPUTERS,
        computers: computers
    }
}

export function unselectComputer(id) {
    return {
        type: UNSELECT_COMPUTER,
        id: id
    }
}

export default function reducer(state = {computers: [], selected: []}, action) {
    switch (action.type) {
        case SELECT_COMPUTER:
            return {...state, selected: [action.id]};
        case UNSELECT_COMPUTER:
            return {...state, selected: state.filter((id) => action.id !== id)};
        case SET_COMPUTERS:
            return {computers: action.computers, selected: []};
        default:
            return state;
    }
}