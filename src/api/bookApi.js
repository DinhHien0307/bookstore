import axios from "axios";

const bookApi = {
    getAll: () => {
        const url = '/books';
        return axios.get(url);
    },

    get: id => {
        const url = `/books/${id}`;
        return axios.get(url);
    }
}

export default bookApi;