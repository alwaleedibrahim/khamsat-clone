import axiosInstance from "./axiosInstance"
import IOrderListItem from "../../_models/orderlist"

export default async function orderListLoader(token : string) : Promise<IOrderListItem[]> {
    try {
      const response = await axiosInstance.get(`orders/my-orders`, {headers: {Authorization: `${token}`}})
      if (response.data) {
          return response.data.data
      } else {
        throw new Error("Cannot get orders")
      }
    } catch(err) {
      return Promise.reject(err)
    }
}