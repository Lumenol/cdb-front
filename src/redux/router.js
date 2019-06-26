const SET_SHOW = "SET_SHOW";
export const SHOW = {
    COMPANIES: "COMPANIES",
    COMPUTERS: "COMPUTERS"
};

export function setShow(show) {
    return {
        type: SET_SHOW,
        show: show
    }
}

const reducer = (state = SHOW.COMPUTERS, action) => {
    switch (action.type) {
        case SET_SHOW:
            return action.show;
        default :
            return state;
    }
};

export default reducer;