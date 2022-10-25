import axios from 'axios';

const APIURL = 'http://localhost:5000/api/'

const TOKEN =
export const publicRequest = axios.create({
    baseURL: APIURL,
})

export const userRequest = axios.create({
    baseURL: APIURL,
    header: { token: `Bearer ${}` }
})