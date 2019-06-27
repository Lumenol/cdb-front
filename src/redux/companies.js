import {createCompany, deleteCompanies, getCompanies as getAll, updateCompany} from '../api/companies';

const SET_ERROR = 'SET_ERROR';
const SET_COMPANIES = 'SET_COMPANIES';

export function getCompanies() {
    return async function (dispatch) {
        try {
            const result = await getAll();
            dispatch(setCompanies(result));
        } catch (e) {
            dispatch(setError(e));
        }
    }
}

export const addCompany = (name) => {
    return async function (dispatch) {
        try {
            await addCompany(createCompany({
                name
            }));
            dispatch(getCompanies());
        } catch (e) {
            dispatch(setError(e));
        }
    }
};

export function editCompany(id, name) {
    return async function (dispatch) {
        try {
            await updateCompany({id, name});
            dispatch(getCompanies());
        } catch (e) {
            dispatch(setError(e));
        }
    }
}

export function deleteCompany(id) {
    return async function (dispatch) {
        try {
            await deleteCompanies(id);
            dispatch(getCompanies());
        } catch (e) {
            dispatch(setError(e));
        }
    }
}

function setCompanies(companies) {
    return {
        type: SET_COMPANIES,
        companies: companies
    }
}

function setError(error) {
    return {
        type: SET_ERROR,
        error: error
    }
}

export default function reducer(state = {companies: [], error: ""}, action) {
    switch (action.type) {
        case SET_COMPANIES:
            return {companies: action.companies};
        case SET_ERROR:
            return {error: action.error};
        default:
            return state;
    }
}