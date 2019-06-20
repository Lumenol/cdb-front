import axios from 'axios';

export const addTokenInterceptor = getToken => axios.interceptors.request.use((config) => {
    const headers = config.headers;
    const token = getToken();
    if (!headers.common.Authorization && token) {
        headers.common.Authorization = "Bearer " + token;
    }
    return config;
});