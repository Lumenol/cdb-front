import {createCompany, deleteCompanies, getCompanies as getAll, updateCompany} from '../api/companies';
import {notificationError, notificationSuccess} from "./notification";
import i18n from "../configuration/i18n";

const SET_COMPANIES = 'SET_COMPANIES';

export function getCompanies() {
    return async function (dispatch) {
        try {
            const result = await getAll();
            dispatch(setCompanies(result));
        } catch (e) {
            dispatch(notificationError(i18n.t("company.load")));
        }
    }
}

export const addCompany = (name) => {
    return async function (dispatch) {
        try {
            await createCompany({
                name
            });
            dispatch(getCompanies());
            dispatch(notificationSuccess(i18n.t("company.creation.success")));
        } catch (e) {
            dispatch(notificationError(i18n.t("company.creation.error")));
        }
    }
};

export function editCompany(id, name) {
    return async function (dispatch) {
        try {
            await updateCompany({id, name});
            dispatch(getCompanies());
            dispatch(notificationSuccess(i18n.t("company.update.success")));
        } catch (e) {
            dispatch(notificationError(i18n.t("company.update.error")));
        }
    }
}

export function deleteCompany(id) {
    return async function (dispatch) {
        try {
            await deleteCompanies(id);
            dispatch(getCompanies());
            dispatch(notificationSuccess(i18n.t("company.delete.success")));
        } catch (e) {
            dispatch(notificationError(i18n.t("company.delete.error")));
        }
    }
}

function setCompanies(companies) {
    return {
        type: SET_COMPANIES,
        companies: companies
    }
}

export default function reducer(state = {companies: []}, action) {
    switch (action.type) {
        case SET_COMPANIES:
            return {companies: action.companies};
        default:
            return state;
    }
}