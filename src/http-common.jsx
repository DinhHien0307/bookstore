import axiosClient from 'axios';
import queryString from 'query-string';

const axios = axiosClient.create(
    {
        baseURL: "http://127.0.0.1:8000/api",
        headers: {
            "Content-type": "application/json"
        },
        // This parse params to query string into url.
        paramsSerializer: params => queryString.stringify(params),
    }
);

axios.interceptors.request.use(async config => {
        // Handle token.
        return config;
    }
);

axios.interceptors.response.use(response => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    }, error => {
        // Handle error.
        throw error;
    }
);

export default axios;