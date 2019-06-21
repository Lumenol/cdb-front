import axios from 'axios';
import {COMPUTERS_URL} from "../configuration/constants";

export async function getAll(page, size, field, direction, search) {
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