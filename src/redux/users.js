import {deleteUsers, getUsers as getAll, updateUser} from '../api/users';
import {notificationError, notificationSuccess} from "./notification";
import i18n from "../configuration/i18n";

const SET_USERS = 'SET_USERS';

export function getUsers() {
    return async function (dispatch) {
        try {
            const result = await getAll();
            dispatch(setUsers(result));
        } catch (e) {
            dispatch(notificationError(i18n.t("user.load")));
        }
    }
}

export function editUser(id, newRoles) {
    return async function (dispatch) {
        try {
            await updateUser(id, newRoles);
            dispatch(getUsers());
            dispatch(notificationSuccess(i18n.t("user.update.success")));
        } catch (e) {
            dispatch(notificationError(i18n.t("user.update.error")));
        }
    }
}

export function deleteUser(id) {
    return async function (dispatch) {
        try {
            await deleteUsers(id);
            dispatch(getUsers());
            dispatch(notificationSuccess(i18n.t("user.delete.success")));
        } catch (e) {
            dispatch(notificationError(i18n.t("user.delete.error")));
        }
    }
}

function setUsers(users) {
    return {
        type: SET_USERS,
        users: users
    }
}


export default function reducer(state = {users: [], error: ""}, action) {
    switch (action.type) {
        case SET_USERS:
            return {users: action.users};
        default:
            return state;
    }
}