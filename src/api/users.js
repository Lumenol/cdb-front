import axios from 'axios';
import {USERS_URL} from "../configuration/constants";

export async function getUsers() {
    try {
        const result = await axios.get(USERS_URL);
        return result.data;
    } catch (e) {
        console.error(e);
        throw(e);
    }
}

export async function getUserById(id) {
    try {
        const result = await axios.get(USERS_URL + `/${id}`);
        return result.data;
    } catch (e) {
        console.error(e);
        throw(e);
    }
}

export async function deleteUsers(id) {
    try {
        await axios.delete(USERS_URL + `/${id}`);
    } catch (e) {
        console.error(e);
        throw(e);
    }
}

export async function countUsers() {
    try {
        const result = await axios.get(USERS_URL + `/count`);
        return result.data;
    } catch (e) {
        console.error(e);
        throw(e);
    }
}

export async function updateUser(id, newRoles) {
    try {
        await axios.put(USERS_URL + `/${id}`, newRoles);
    } catch (e) {
        console.error(e);
        throw(e);
    }
}

export async function existUserById(id) {
    try {
        const result = await axios.get(USERS_URL + `/exist/${id}`);
        return result.data;
    } catch (e) {
        console.error(e);
        throw(e);
    }
}