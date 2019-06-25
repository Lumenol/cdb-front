import {getCompanies as getAll} from '../api/companies';

const SET_ERROR = 'SET_ERROR';
const SET_COMPANIES = 'SET_COMPANIES';

export function getCompanies() {
    return async function (dispatch, getState) {
        try {
            const state = getState();
            const result = await getAll();
            dispatch(setCompanies(result));
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