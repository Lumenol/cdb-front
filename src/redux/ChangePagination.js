const SET_PAGE_SIZE = "SET_PAGE_SIZE";

export function setPageSize(size) {
    return {type: SET_PAGE_SIZE,
        size: size
    }
}

export default function reducer(state = 10, action) {
    if(action.type === SET_PAGE_SIZE) {
        if(action.size > 0) {
            return action.size;
        }
    }
    return state
}
