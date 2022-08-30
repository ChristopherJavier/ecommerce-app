/* eslint-disable import/no-anonymous-default-export */
import axios from "axios"

const baseUrl = "http://localhost:3001/api/cart"

const checkoutItems = async (ids) => {
    const items = {
        items: ids
    }

    const request = await axios.post(`${baseUrl}/check`, items)
    return request.data
}

export default {
    checkoutItems,
}