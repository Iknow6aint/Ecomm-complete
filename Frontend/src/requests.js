import axios from 'axios';

const APIURL = 'http://localhost:5000/api/'

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTgxMjZhZDE4YzEzZTUwYjhjODU4MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjcxNjUwMSwiZXhwIjoxNjY2OTc1NzAxfQ.6NSW88o-t8R2QdBDzNnfRQMIBC_KM1h7B1NN63b2eyc'
export const publicRequest = axios.create({
    baseURL: APIURL,
})

export const userRequest = axios.create({
    baseURL: APIURL,
    header: { token: `Bearer ${TOKEN}` },
})