import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

const config : CreateAxiosDefaults = {
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
}

const axiosInstance : AxiosInstance = axios.create(config)

export default axiosInstance