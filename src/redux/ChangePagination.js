const SET_PAGE_SIZE = "SET_PAGE_SIZE";

export function setPageSize(size) {
    return {
        type: SET_PAGE_SIZE,
        size: size
    }
}

export default function reducer(state = 10, action) {
    switch (action.type) {
        case SET_PAGE_SIZE:
            return action.size;
        default:
            return state;
    }

}
