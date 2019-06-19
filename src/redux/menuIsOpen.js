const MENU_IS_OPEN = 'MENU_IS_OPEN';

export function closeMenu() {
    return {
        type: MENU_IS_OPEN,
        menuIsOpen: false
    }

}

export function openMenu() {
    return {
        type: MENU_IS_OPEN,
        menuIsOpen: true
    }

}

const reducer = (state = true, action) => {
    if (action.type === MENU_IS_OPEN) {
        return action.menuIsOpen;
    } else {
        return state;
    }
};

export default reducer;