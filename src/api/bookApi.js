import axios from "../http-common";

const bookApi = {
    getAll: () => {
        const url = '/books';
        return axios.get(url);
    },

    get: id => {
        const url = `/books/${id}`;
        return axios.get(url);
    },

    getFeaturedBook: () => {
        const url = '/books?view=featured';
        return axios.get(url);
    }
}

export default bookApi;