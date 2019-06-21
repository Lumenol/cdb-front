import axios from 'axios';
import {GET_ALL_URL} from "../configuration/constants";

export async function getAll(direction, field, page, search, size) {
    try {
        const result = await axios.get(GET_ALL_URL, {
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