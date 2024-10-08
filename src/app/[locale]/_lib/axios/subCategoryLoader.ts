import { AxiosResponse } from "axios"
import axiosInstance from "./axiosInstance"

export default async function subcategoriesLoader(name: string) {
    try {
      const categoryResponse : AxiosResponse = await axiosInstance.get(`/categories?categoryName=${name}`)
      if (categoryResponse.data) {
          const categoryId = categoryResponse.data.categories[0]._id
          const subcategoryResponse : AxiosResponse = await axiosInstance.get(`/categories/category/${categoryId}`)
          console.log(`/categories/category/${categoryId}`);
          
          if(subcategoryResponse.data) {
            return subcategoryResponse.data.subcategoryTitle
          }
      } else {
        throw new Error("Cannot get category")
      }
    } catch(err) {
      return Promise.reject(err)
    }
}