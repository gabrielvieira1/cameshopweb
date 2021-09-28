import axios from "axios";

const api = axios.create({
    baseURL: "https://cameshop.azurewebsites.net/"
});

export default api;