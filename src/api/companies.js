import axios from 'axios';
import {COMPANIES_URL} from "../configuration/constants";

export async function getCompanies() {
    try {
        const result = await axios.get(COMPANIES_URL);
        return result.data;
    } catch (e) {
        console.error(e);
        throw(e);
    }
}

export async function getCompanyById(id) {
    try {
        const result = await axios.get(COMPANIES_URL + `/${id}`);
        return result.data;
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

export async function countCompanies() {
    try {
        const result = await axios.get(COMPANIES_URL + `/count`);
        return result.data;
    } catch (e) {
        console.error(e);
        throw(e);
    }
}

export async function createCompany(createCompanyDTO) {
    try {
        await axios.post(COMPANIES_URL, createCompanyDTO);
    } catch (e) {
        console.error(e);
        throw(e);
    }
}

export async function existCompanyById(id) {
    try {
        const result = await axios.get(COMPANIES_URL + `/exist/${id}`);
        return result.data;
    } catch (e) {
        console.error(e);
        throw(e);
    }
}