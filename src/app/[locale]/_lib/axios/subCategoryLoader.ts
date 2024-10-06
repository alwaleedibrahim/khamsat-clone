import { AxiosResponse } from "axios"
import axiosInstance from "./axiosInstance"

export default async function subcategoriesLoader(id: string) {
    try {
      const response : AxiosResponse = await axiosInstance.get(`categories/${id}`)
      if (response.data) {
          return response.data.subcategoryTitle
      } else {
        throw new Error("Cannot get categories")
      }
    } catch(err) {
      return Promise.reject(err)
    }
}