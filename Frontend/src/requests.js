import axios from 'axios';

const APIURL = 'http://localhost:5000/api/'


const TOKEN = JSON.parse(localStorage.getItem('user'));
export const publicRequest = axios.create({
    baseURL: APIURL,
})

export const userRequest = axios.create({
    baseURL: APIURL,
    header: { token: `Bearer ${TOKEN}` },
})

export const userReg = axios.create({
    baseURL: APIURL
})
