const MENU_IS_OPEN = 'MENU_IS_OPEN';

export function closeMenu() {
    return {
        type: MENU_IS_OPEN,
        isOpen: false
    }
}

export function openMenu() {
    return {
        type: MENU_IS_OPEN,
        isOpen: true
    }
}

const reducer = (state = true, action) => {
    if (action.type === MENU_IS_OPEN) {
        return action.isOpen;
    } else {
        return state;
    }
};

export default reducer;