import axiosInstance from "./axiosInstance"
import IOrderListItem from "../../_models/orderlist"

export default async function orderListLoader(token : string, status:string | null, endpoint: string) : Promise<IOrderListItem[]> {
    try {
      const response = await axiosInstance.get(`orders/${endpoint}${status? `?status=${status}` : ``}`, {headers: {Authorization: `${token}`}})
      if (response.data) {
          return response.data.data
      } else {
        throw new Error("Cannot get orders")
      }
    } catch(err) {
      return Promise.reject(err)
    }
}

export async function orderLoader(token : string, id:string ) : Promise<IOrderListItem> {
  try {
    const response = await axiosInstance.get(`orders/${id}`, {headers: {Authorization: `${token}`}})
    if (response.data) {
        return response.data.data
    } else {
      throw new Error("Cannot get order")
    }
  } catch(err) {
    return Promise.reject(err)
  }
}