/* eslint-disable import/no-anonymous-default-export */
import axios from "axios"

const baseUrl = "http://localhost:3001/api"

const getAll = () => {
    const request = axios.get(`${baseUrl}/products`)
    return request.then(response => response.data)
}

const getOne = (id) => {
    const request = axios.get(`${baseUrl}/products/${id}`)
    return request.then(response => response.data)
}

export default {
    getAll,
    getOne
}