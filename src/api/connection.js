import axios from 'axios';
import {LOGIN_URL} from "../configuration/constants";


function extractToken(response) {
    return response.headers.authorization.split(" ")[1];
}

export async function getToken(login, password) {
    try {
        const response = await axios.post(LOGIN_URL, {username: login, password: password});
        return extractToken(response);
    } catch (e) {
        console.error("Erreur lors de l'attribution du token");
        return "";
    }
}

export async function refreshToken(token) {
    try {
        const response = await axios.get(LOGIN_URL);
        return extractToken(response);
    } catch (e) {
        console.error("Erreur lors du refresh de token");
        return "";
    }
}

export function pushToken(header) {

}