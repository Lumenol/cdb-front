import axios from 'axios';
import {COMPUTERS_URL} from "../configuration/constants";

export async function getAll(direction, field, page, search, size) {
    try {
        const result = await axios.get(COMPUTERS_URL, {
            params: {
                direction,
                field,
                page,
                search,
                size,
            }
        });
        return result.data;
    } catch (error) {
        console.error(error);
        throw(error);
    }
}

export async function getComputerById(id) {
    try {
        const result = await axios.get(COMPUTERS_URL + `/${id}`);
        return result.data;
    } catch (e) {
        console.error(e);
        throw(e);
    }
}

export async function createComputer() {
    try {
        await axios.post(COMPUTERS_URL);
    } catch (e) {
        console.error(e);
        throw(e);
    }
}

export async function updateComputer(computer) {
    try {
        await axios.put(COMPUTERS_URL, {
            params: {
                computer
            }
        });
    } catch (e) {
        console.error(e);
        throw(e);
    }
}

export async function deleteComputer(id) {
    try {
        await axios.delete(COMPUTERS_URL + `/${id}`);
    } catch (e) {
        console.error(e);
        throw(e);
    }
}

export async function countComputers(search) {
    try {
        const result = await axios.get(COMPUTERS_URL + `/count`, {
            params: {
                search
            }
        });
        return result.data;
    } catch (e) {
        console.error(e);
        throw(e);
    }
}

export async function existComputerById(id) {
    try {
        const result = await axios.get(COMPUTERS_URL + `/exist/${id}`);
        return result.data;
    } catch (e) {
        console.error(e);
        throw(e);
    }
}