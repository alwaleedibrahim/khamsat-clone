import axiosInstance from "./axiosInstance"


export default async function categoriesLoader() {
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