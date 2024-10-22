import axiosInstance from "./axiosInstance"


export default async function createPaymentIntent(amount: number) : Promise<{clientSecret :string}> {
    try {
      const response = await axiosInstance.post(`payment/create-payment-intent`, {amount})
      if (response.data) {
          return {clientSecret: response.data.clientSecret}
      } else {
        throw new Error("Cannot create payment intent")
      }
    } catch(err) {
      return Promise.reject(err)
    }
}