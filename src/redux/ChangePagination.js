const SET_PAGE_SIZE = "SET_PAGE_SIZE";

export function setPageSize(size) {
    return {
        type: SET_PAGE_SIZE,
        size: size
    }
}

export default function reducer(state = true, action) {
    switch (action.type) {
        case action.type > 0:
            return action.size;
        default:
            return state;
    }

}
