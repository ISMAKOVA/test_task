import axios from "axios";
import data from "./entities.json"
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export const getData = async () => {
    // const {data} = await $host.get('api/')
    return data
}
