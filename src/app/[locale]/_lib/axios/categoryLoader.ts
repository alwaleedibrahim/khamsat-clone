import ICategory from "../../_models/category"
import axiosInstance from "./axiosInstance"


export default async function categoriesLoader() : Promise<ICategory[]> {
    try {
      const response = await axiosInstance.get(`categories`)
      if (response.data) {
          return response.data.categories
      } else {
        throw new Error("Cannot get categories")
      }
    } catch(err) {
      return Promise.reject(err)
    }
}