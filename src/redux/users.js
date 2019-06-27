import {deleteUsers, getUsers as getAll, updateUser} from '../api/users';

const SET_ERROR = 'SET_ERROR';
const SET_USERS = 'SET_USERS';

export function getUsers() {
    return async function (dispatch) {
        try {
            const result = await getAll();
            dispatch(setUsers(result));
        } catch (e) {
            dispatch(setError(e));
        }
    }
}

export function editUser(id, newRoles) {
    return async function (dispatch) {
        try {
            await updateUser(id, newRoles);
            dispatch(getUsers());
        } catch (e) {
            dispatch(setError(e));
        }
    }
}

export function deleteUser(id) {
    return async function (dispatch) {
        try {
            await deleteUsers(id);
            dispatch(getUsers());
        } catch (e) {
            dispatch(setError(e));
        }
    }
}

function setUsers(users) {
    return {
        type: SET_USERS,
        users: users
    }
}

function setError(error) {
    return {
        type: SET_ERROR,
        error: error
    }
}

export default function reducer(state = {users: [], error: ""}, action) {
    switch (action.type) {
        case SET_USERS:
            return {users: action.users};
        case SET_ERROR:
            return {error: action.error};
        default:
            return state;
    }
}