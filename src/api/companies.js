import axios from 'axios';
import {COMPANIES_URL} from "../configuration/constants";

export async function getCompanies() {
    try {
        const result = await axios.get(COMPANIES_URL).then(res => res.data);
        return result;
    } catch (e) {
        console.error(e);
        throw(e);
    }
}

export async function getCompanyById(id) {
    try {
        const result = await axios.get(COMPANIES_URL + `/${id}`).then(res => res.data);
        return result;
    } catch (e) {
        console.error(e);
        throw(e);
    }
}

export async function deleteCompanies(id) {
    try {
        await axios.delete(COMPANIES_URL + `/${id}`);
    } catch (e) {
        console.error(e);
        throw(e);
    }
}

export async function countCompanies(id) {
    try {
        const result = await axios.get(COMPANIES_URL + `/count`);
        return result;
    } catch (e) {
        console.error(e);
        throw(e);
    }
}

export async function existCompanyById(id) {
    try {
        const result = await axios.get(COMPANIES_URL + `/exist/${id}`).then(res => res.data);
        return result;
    } catch (e) {
        console.error(e);
        throw(e);
    }
}