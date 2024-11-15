import axios from "axios";

export const API_BASE_URL = 'http://localhost:8080';

export const API_AUTH_BASE_URL = '/auth/peerlink/user';

const jwtToken = localStorage.getItem("jwt");

export const api = axios.create({
    headers: {
        "Authorization": `Bearer ${jwtToken}`,
        "Content-Type":"application/json"
    }
})